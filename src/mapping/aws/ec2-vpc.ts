import { registerMapping } from "../index";
import { VPC, EC2, ELB } from "../../aws";
import { createGuessingResourceMapper } from "../helper";
import { Aspects } from "cdktf";

registerMapping("AWS::EC2::VPC", {
  resource: createGuessingResourceMapper(VPC.Vpc),
  attributes: {
    // TODO: make attributes optional!
    Arn: (vpc: VPC.Vpc) => vpc.arn,
    Ref: (vpc: VPC.Vpc) => vpc.id,
  },
});

registerMapping("AWS::EC2::Subnet", {
  resource: createGuessingResourceMapper(VPC.Subnet),
  attributes: {
    Arn: (subnet: VPC.Subnet) => subnet.arn,
    Ref: (subnet: VPC.Subnet) => subnet.id,
  },
});

registerMapping("AWS::EC2::Route", {
  resource: createGuessingResourceMapper(VPC.Route),
  attributes: {
    Arn: () => {
      throw new Error("Route resource does not have an arn");
    },
    Ref: (route: VPC.Route) => route.id,
  },
});

registerMapping("AWS::EC2::RouteTable", {
  resource: createGuessingResourceMapper(VPC.RouteTable),
  attributes: {
    Arn: (table: VPC.RouteTable) => table.arn,
    Ref: (table: VPC.RouteTable) => table.id,
  },
});

registerMapping("AWS::EC2::SubnetRouteTableAssociation", {
  resource: createGuessingResourceMapper(VPC.RouteTableAssociation),
  attributes: {
    Arn: () => {
      throw new Error("RouteTableAssociation resource does not have an arn");
    },
    Ref: (a: VPC.RouteTableAssociation) => a.id,
  },
});

registerMapping("AWS::EC2::EIP", {
  resource: createGuessingResourceMapper(EC2.Eip),
  attributes: {
    Arn: () => {
      throw new Error("Eip resource does not have an arn");
    },
    Ref: (e: EC2.Eip) => e.id,
    AllocationId: (e: EC2.Eip) => e.allocationId,
  },
});

registerMapping("AWS::EC2::NatGateway", {
  resource: createGuessingResourceMapper(VPC.NatGateway),
  attributes: {
    Arn: () => {
      throw new Error("NatGateway resource does not have an arn");
    },
    Ref: (gateway: VPC.NatGateway) => gateway.id,
  },
});

registerMapping("AWS::EC2::InternetGateway", {
  resource: createGuessingResourceMapper(VPC.InternetGateway),
  attributes: {
    Arn: (gateway: VPC.InternetGateway) => gateway.arn,
    Ref: (gateway: VPC.InternetGateway) => gateway.id,
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
        if (node instanceof VPC.InternetGateway) {
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
  resource: createGuessingResourceMapper(ELB.Lb),
  attributes: {
    Arn: (elb: ELB.Lb) => elb.arn,
    Ref: (elb: ELB.Lb) => elb.id,
    DNSName: (elb: ELB.Lb) => elb.dnsName,
  },
});

registerMapping("AWS::EC2::SecurityGroup", {
  resource: createGuessingResourceMapper(VPC.SecurityGroup), // FIXME: create rules via SecurityGroupRule resource?
  attributes: {
    Arn: (sg: VPC.SecurityGroup) => sg.arn,
    Ref: (sg: VPC.SecurityGroup) => sg.id,
    GroupId: (sg: VPC.SecurityGroup) => sg.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupEgress", {
  resource: createGuessingResourceMapper(VPC.SecurityGroupRule), // FIXME: create egress rule
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: VPC.SecurityGroupRule) => rule.id,
  },
});

registerMapping("AWS::EC2::SecurityGroupIngress", {
  resource: createGuessingResourceMapper(VPC.SecurityGroupRule), // FIXME: create ingress rule
  attributes: {
    Arn: () => {
      throw new Error("SecurityGroupRule has no arn");
    },
    Ref: (rule: VPC.SecurityGroupRule) => rule.id,
  },
});

registerMapping("AWS::ElasticLoadBalancingV2::TargetGroup", {
  resource: createGuessingResourceMapper(ELB.LbTargetGroup),
  attributes: {
    Arn: (rule: ELB.LbTargetGroup) => rule.arn,
    Ref: (rule: ELB.LbTargetGroup) => rule.id,
  },
});
