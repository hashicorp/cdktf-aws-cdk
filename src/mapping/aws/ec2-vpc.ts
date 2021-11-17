import { registerMapping } from "../index";
import { vpc, ec2, elb } from "../../aws";
import { createGuessingResourceMapper } from "../helper";
import { Aspects } from "cdktf";

registerMapping("AWS::EC2::Route", {
  resource: createGuessingResourceMapper(vpc.Route),
  attributes: {
    Arn: () => {
      throw new Error("Route resource does not have an arn");
    },
    Ref: (route: vpc.Route) => route.id,
  },
});

registerMapping("AWS::EC2::SubnetRouteTableAssociation", {
  resource: createGuessingResourceMapper(vpc.RouteTableAssociation),
  attributes: {
    Arn: () => {
      throw new Error("RouteTableAssociation resource does not have an arn");
    },
    Ref: (a: vpc.RouteTableAssociation) => a.id,
  },
});

registerMapping("AWS::EC2::EIP", {
  resource: createGuessingResourceMapper(ec2.Eip),
  attributes: {
    Arn: () => {
      throw new Error("Eip resource does not have an arn");
    },
    Ref: (e: ec2.Eip) => e.id,
    AllocationId: (e: ec2.Eip) => e.allocationId,
  },
});

registerMapping("AWS::EC2::NatGateway", {
  resource: createGuessingResourceMapper(vpc.NatGateway),
  attributes: {
    Arn: () => {
      throw new Error("NatGateway resource does not have an arn");
    },
    Ref: (gateway: vpc.NatGateway) => gateway.id,
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
        if (node instanceof vpc.InternetGateway) {
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
        "AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed"
      );
    },
    Ref: () => {
      throw new Error(
        "AWS::EC2::VPCGatewayAttachment has no represenation in Terraform and therefore cannot be accessed"
      );
    },
  },
});

registerMapping("AWS::ElasticLoadBalancingV2::LoadBalancer", {
  resource: createGuessingResourceMapper(elb.Lb),
  attributes: {
    Arn: (elb: elb.Lb) => elb.arn,
    Ref: (elb: elb.Lb) => elb.id,
    DNSName: (elb: elb.Lb) => elb.dnsName,
  },
});

registerMapping("AWS::EC2::SecurityGroup", {
  resource: createGuessingResourceMapper(vpc.SecurityGroup), // FIXME: create rules via SecurityGroupRule resource?
  attributes: {
    Arn: (sg: vpc.SecurityGroup) => sg.arn,
    Ref: (sg: vpc.SecurityGroup) => sg.id,
    GroupId: (sg: vpc.SecurityGroup) => sg.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupEgress", {
  resource: createGuessingResourceMapper(vpc.SecurityGroupRule), // FIXME: create egress rule
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: vpc.SecurityGroupRule) => rule.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupIngress", {
  resource: createGuessingResourceMapper(vpc.SecurityGroupRule), // FIXME: create ingress rule
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: vpc.SecurityGroupRule) => rule.id,
  },
});

registerMapping("AWS::ElasticLoadBalancingV2::TargetGroup", {
  resource: createGuessingResourceMapper(elb.LbTargetGroup),
  attributes: {
    Arn: (rule: elb.LbTargetGroup) => rule.arn,
    Ref: (rule: elb.LbTargetGroup) => rule.id,
  },
});
