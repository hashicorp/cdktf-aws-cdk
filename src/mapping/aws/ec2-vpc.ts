/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Aspects } from "cdktf";
import { InternetGateway } from "../../aws/internet-gateway";
import { Lb } from "../../aws/lb";
import { Route } from "../../aws/route";
import { RouteTable } from "../../aws/route-table";
import { RouteTableAssociation } from "../../aws/route-table-association";
import { SecurityGroup } from "../../aws/security-group";
import { SecurityGroupRule } from "../../aws/security-group-rule";
import { Subnet } from "../../aws/subnet";
import { Vpc } from "../../aws/vpc";
import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";

registerMapping("AWS::EC2::VPC", {
  resource: createGuessingResourceMapper(Vpc),
  attributes: {
    // TODO: make attributes optional!
    Arn: (vpc: Vpc) => vpc.arn,
    Ref: (vpc: Vpc) => vpc.id,
  },
});

registerMapping("AWS::EC2::Subnet", {
  resource: createGuessingResourceMapper(Subnet),
  attributes: {
    Arn: (subnet: Subnet) => subnet.arn,
    Ref: (subnet: Subnet) => subnet.id,
  },
});

registerMapping("AWS::EC2::Route", {
  resource: createGuessingResourceMapper(Route),
  attributes: {
    Arn: () => {
      throw new Error("Route resource does not have an arn");
    },
    Ref: (route: Route) => route.id,
  },
});

registerMapping("AWS::EC2::RouteTable", {
  resource: createGuessingResourceMapper(RouteTable),
  attributes: {
    Arn: (table: RouteTable) => table.arn,
    Ref: (table: RouteTable) => table.id,
  },
});

registerMapping("AWS::EC2::SubnetRouteTableAssociation", {
  resource: createGuessingResourceMapper(RouteTableAssociation),
  attributes: {
    Arn: () => {
      throw new Error("RouteTableAssociation resource does not have an arn");
    },
    Ref: (a: RouteTableAssociation) => a.id,
  },
});

registerMapping("AWS::EC2::VPCGatewayAttachment", {
  resource: (scope, _id, props) => {
    // This has no resource representation in TF, see also: https://github.com/hashicorp/terraform-provider-aws/issues/5465#issuecomment-415575387
    // so we add an aspect to simulate the behaviour it has
    const vpcId = props.VpcId;
    delete props.VpcId;
    delete props.InternetGatewayId;

    Aspects.of(scope).add({
      visit: (node) => {
        // FIXME: move this into some creation function or similar
        // TODO: this has the shortcoming of changing all internet gateways
        if (node instanceof InternetGateway) {
          // TODO: check the node.id and try to resolve that token somehow to find out the targetted internet gateway (note.id will be a Lazy that resolves to some TF resource)
          node.vpcId = vpcId;
        }
      },
    });

    return null;
  },
  attributes: {
    // FIXME: when is this used? resolve to the related InternetGateway or VpnGateway instead
    Arn: () => {
      throw new Error(
        "AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed",
      );
    },
    Ref: () => {
      throw new Error(
        "AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed",
      );
    },
  },
});

registerMapping("AWS::ElasticLoadBalancingV2::LoadBalancer", {
  resource: createGuessingResourceMapper(Lb),
  attributes: {
    Arn: (elb: Lb) => elb.arn,
    Ref: (elb: Lb) => elb.id,
    DNSName: (elb: Lb) => elb.dnsName,
  },
});

registerMapping("AWS::EC2::SecurityGroup", {
  resource: createGuessingResourceMapper(SecurityGroup), // FIXME: create rules via SecurityGroupRule resource?
  attributes: {
    Arn: (sg: SecurityGroup) => sg.arn,
    Ref: (sg: SecurityGroup) => sg.id,
    GroupId: (sg: SecurityGroup) => sg.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupEgress", {
  resource: (scope, id, props) => {
    props.Type = "egress";
    return createGuessingResourceMapper(SecurityGroupRule, {
      GroupId: "securityGroupId",
      IpProtocol: "protocol",
    })(scope, id, props);
  },
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: SecurityGroupRule) => rule.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupIngress", {
  resource: (scope, id, props) => {
    props.Type = "ingress";
    return createGuessingResourceMapper(SecurityGroupRule, {
      GroupId: "securityGroupId",
      IpProtocol: "protocol",
    })(scope, id, props);
  },
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: SecurityGroupRule) => rule.id,
  },
});
