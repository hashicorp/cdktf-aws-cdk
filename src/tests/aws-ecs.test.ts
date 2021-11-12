import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as ecs_patterns,
} from "aws-cdk-lib";
import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { AwsTerraformAdapter } from "../aws-adapter";

// mappings are not yet finished, so testing them makes no sense.
describe.skip("ecs cluster", () => {
  it("should synthesize", () => {
    const res = Testing.synthScope((scope) => {
      const awsAdapter = new AwsTerraformAdapter(scope, "adapter");

      const vpc = new ec2.Vpc(awsAdapter, "MyVpc", {
        maxAzs: 3, // Default is all AZs in region
      });

      const cluster = new ecs.Cluster(awsAdapter, "MyCluster", {
        vpc: vpc,
      });

      // Create a load-balanced Fargate service and make it public
      new ecs_patterns.ApplicationLoadBalancedFargateService(
        awsAdapter,
        "MyFargateService",
        {
          cluster: cluster, // Required
          cpu: 256, // Default is 256
          desiredCount: 1, // Default is 1
          taskImageOptions: {
            image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
          },
          memoryLimitMiB: 512, // Default is 512
          publicLoadBalancer: true, // Default is false
        }
      );
    });

    expect(res).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_availability_zones\\": {
            \\"adapter_aws_azs_default_region_9CD033CD\\": {}
          },
          \\"aws_region\\": {
            \\"adapter_aws-region_F8878EF0\\": {}
          }
        },
        \\"output\\": {
          \\"adapter_MyFargateServiceLoadBalancerDNS704F6391_B8C12FE4\\": {
            \\"value\\": \\"\${aws_lb.adapter_MyFargateServiceLBDE830E97_C56B08C5.dns_name}\\"
          },
          \\"adapter_MyFargateServiceServiceURL4CF8398A_438A34A6\\": {
            \\"value\\": \\"\${join(\\\\\\"\\\\\\", [\\\\\\"http://\\\\\\", aws_lb.adapter_MyFargateServiceLBDE830E97_C56B08C5.dns_name])}\\"
          }
        },
        \\"provider\\": {
          \\"time\\": [
            {
              \\"alias\\": \\"awsadapter_eventual_consistency_workaround_aspect\\"
            }
          ]
        },
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_MyCluster4C1BA579_F577C7D2\\": {
              \\"desired_state\\": \\"\${jsonencode({})}\\",
              \\"type_name\\": \\"AWS::ECS::Cluster\\"
            },
            \\"adapter_MyFargateServiceF490C034_AF158886\\": {
              \\"desired_state\\": \\"\${jsonencode({Cluster = jsondecode(aws_cloudcontrolapi_resource.adapter_MyCluster4C1BA579_F577C7D2.properties)[\\\\\\"Ref\\\\\\"], DeploymentConfiguration = {MaximumPercent = 200, MinimumHealthyPercent = 50}, DesiredCount = 1, EnableECSManagedTags = false, HealthCheckGracePeriodSeconds = 60, LaunchType = \\\\\\"FARGATE\\\\\\", LoadBalancers = [{ContainerName = \\\\\\"web\\\\\\", ContainerPort = 80, TargetGroupArn = aws_lb_target_group.adapter_MyFargateServiceLBPublicListenerECSGroup4A3EDF05_C9A3D86E.id}], NetworkConfiguration = {AwsvpcConfiguration = {AssignPublicIp = \\\\\\"DISABLED\\\\\\", SecurityGroups = [aws_security_group.adapter_MyFargateServiceSecurityGroup7016792A_A06941E3.id], Subnets = [aws_subnet.adapter_MyVpcPrivateSubnet1Subnet5057CF7E_D6B38AD7.id, aws_subnet.adapter_MyVpcPrivateSubnet2Subnet0040C983_374C20B3.id]}}, TaskDefinition = jsondecode(aws_cloudcontrolapi_resource.adapter_MyFargateServiceTaskDef5DA17B39_A3987D6C.properties)[\\\\\\"Ref\\\\\\"]})}\\",
              \\"type_name\\": \\"AWS::ECS::Service\\"
            },
            \\"adapter_MyFargateServiceLBPublicListener61A1042F_9FA42A05\\": {
              \\"desired_state\\": \\"\${jsonencode({DefaultActions = [{TargetGroupArn = aws_lb_target_group.adapter_MyFargateServiceLBPublicListenerECSGroup4A3EDF05_C9A3D86E.id, Type = \\\\\\"forward\\\\\\"}], LoadBalancerArn = aws_lb.adapter_MyFargateServiceLBDE830E97_C56B08C5.id, Port = 80, Protocol = \\\\\\"HTTP\\\\\\"})}\\",
              \\"type_name\\": \\"AWS::ElasticLoadBalancingV2::Listener\\"
            },
            \\"adapter_MyFargateServiceTaskDef5DA17B39_A3987D6C\\": {
              \\"depends_on\\": [
                \\"time_sleep.adapter_MyFargateServiceTaskDefTaskRole62C7D397_sleep_MyFargateServiceTaskDefTaskRole62C7D397_BC1A03ED\\",
                \\"time_sleep.adapter_MyFargateServiceTaskDefExecutionRoleD6305504_sleep_MyFargateServiceTaskDefExecutionRoleD6305504_BF1B53FF\\"
              ],
              \\"desired_state\\": \\"\${jsonencode({ContainerDefinitions = [{Essential = true, Image = \\\\\\"amazon/amazon-ecs-sample\\\\\\", LogConfiguration = {LogDriver = \\\\\\"awslogs\\\\\\", Options = {awslogs-group = jsondecode(aws_cloudcontrolapi_resource.adapter_MyFargateServiceTaskDefwebLogGroup4A6C44E8_B124CB3B.properties)[\\\\\\"Ref\\\\\\"], awslogs-stream-prefix = \\\\\\"MyFargateService\\\\\\", awslogs-region = data.aws_region.adapter_aws-region_F8878EF0.name}}, Name = \\\\\\"web\\\\\\", PortMappings = [{ContainerPort = 80, Protocol = \\\\\\"tcp\\\\\\"}]}], Cpu = \\\\\\"256\\\\\\", ExecutionRoleArn = aws_iam_role.adapter_MyFargateServiceTaskDefExecutionRoleD6305504_680B3636.arn, Family = \\\\\\"adapterMyFargateServiceTaskDef57DAA0C2\\\\\\", Memory = \\\\\\"512\\\\\\", NetworkMode = \\\\\\"awsvpc\\\\\\", RequiresCompatibilities = [\\\\\\"FARGATE\\\\\\"], TaskRoleArn = aws_iam_role.adapter_MyFargateServiceTaskDefTaskRole62C7D397_C55411E2.arn})}\\",
              \\"type_name\\": \\"AWS::ECS::TaskDefinition\\"
            },
            \\"adapter_MyFargateServiceTaskDefwebLogGroup4A6C44E8_B124CB3B\\": {
              \\"desired_state\\": \\"\${jsonencode({})}\\",
              \\"type_name\\": \\"AWS::Logs::LogGroup\\"
            }
          },
          \\"aws_eip\\": {
            \\"adapter_MyVpcPublicSubnet1EIP096967CB_53654349\\": {},
            \\"adapter_MyVpcPublicSubnet2EIP8CCBA239_550FAE49\\": {}
          },
          \\"aws_iam_policy\\": {
            \\"adapter_MyFargateServiceTaskDefExecutionRoleDefaultPolicyEC22B20F_9EE11DB3\\": {
              \\"policy\\": \\"\${jsonencode({Statement = [{Action = [\\\\\\"logs:CreateLogStream\\\\\\", \\\\\\"logs:PutLogEvents\\\\\\"], Effect = \\\\\\"Allow\\\\\\", Resource = jsondecode(aws_cloudcontrolapi_resource.adapter_MyFargateServiceTaskDefwebLogGroup4A6C44E8_B124CB3B.properties)[\\\\\\"Arn\\\\\\"]}], Version = \\\\\\"2012-10-17\\\\\\"})}\\"
            }
          },
          \\"aws_iam_role\\": {
            \\"adapter_MyFargateServiceTaskDefExecutionRoleD6305504_680B3636\\": {
              \\"assume_role_policy\\": \\"\${jsonencode({Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"ecs-tasks.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"})}\\"
            },
            \\"adapter_MyFargateServiceTaskDefTaskRole62C7D397_C55411E2\\": {
              \\"assume_role_policy\\": \\"\${jsonencode({Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"ecs-tasks.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"})}\\"
            }
          },
          \\"aws_internet_gateway\\": {
            \\"adapter_MyVpcIGW5C4A4F63_CD33D37E\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            }
          },
          \\"aws_lb\\": {
            \\"adapter_MyFargateServiceLBDE830E97_C56B08C5\\": {
              \\"security_groups\\": [
                \\"\${aws_security_group.adapter_MyFargateServiceLBSecurityGroup6FBF16F1_96E1F589.id}\\"
              ],
              \\"subnets\\": [
                \\"\${aws_subnet.adapter_MyVpcPublicSubnet1SubnetF6608456_4A36A735.id}\\",
                \\"\${aws_subnet.adapter_MyVpcPublicSubnet2Subnet492B6BFB_5AEAF4BB.id}\\"
              ]
            }
          },
          \\"aws_lb_target_group\\": {
            \\"adapter_MyFargateServiceLBPublicListenerECSGroup4A3EDF05_C9A3D86E\\": {
              \\"port\\": 80,
              \\"protocol\\": \\"HTTP\\",
              \\"target_type\\": \\"ip\\",
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            }
          },
          \\"aws_nat_gateway\\": {
            \\"adapter_MyVpcPublicSubnet1NATGatewayAD3400C1_17A1D4C0\\": {
              \\"allocation_id\\": \\"\${aws_eip.adapter_MyVpcPublicSubnet1EIP096967CB_53654349.allocation_id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPublicSubnet1SubnetF6608456_4A36A735.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet2NATGateway91BFBEC9_F1263232\\": {
              \\"allocation_id\\": \\"\${aws_eip.adapter_MyVpcPublicSubnet2EIP8CCBA239_550FAE49.allocation_id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPublicSubnet2Subnet492B6BFB_5AEAF4BB.id}\\"
            }
          },
          \\"aws_route\\": {
            \\"adapter_MyVpcPrivateSubnet1DefaultRouteA8CDE2FA_5FD01B93\\": {
              \\"destination_cidr_block\\": \\"0.0.0.0/0\\",
              \\"nat_gateway_id\\": \\"\${aws_nat_gateway.adapter_MyVpcPublicSubnet1NATGatewayAD3400C1_17A1D4C0.id}\\",
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPrivateSubnet1RouteTable8819E6E2_BE13C92D.id}\\"
            },
            \\"adapter_MyVpcPrivateSubnet2DefaultRoute9CE96294_9FD03A7B\\": {
              \\"destination_cidr_block\\": \\"0.0.0.0/0\\",
              \\"nat_gateway_id\\": \\"\${aws_nat_gateway.adapter_MyVpcPublicSubnet2NATGateway91BFBEC9_F1263232.id}\\",
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPrivateSubnet2RouteTableCEDCEECE_2B95A4E0.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet1DefaultRoute95FDF9EB_B014B4FB\\": {
              \\"destination_cidr_block\\": \\"0.0.0.0/0\\",
              \\"gateway_id\\": \\"\${aws_internet_gateway.adapter_MyVpcIGW5C4A4F63_CD33D37E.id}\\",
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPublicSubnet1RouteTableC46AB2F4_894E543B.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet2DefaultRoute052936F6_538CE6DB\\": {
              \\"destination_cidr_block\\": \\"0.0.0.0/0\\",
              \\"gateway_id\\": \\"\${aws_internet_gateway.adapter_MyVpcIGW5C4A4F63_CD33D37E.id}\\",
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPublicSubnet2RouteTable1DF17386_AFF8759F.id}\\"
            }
          },
          \\"aws_route_table\\": {
            \\"adapter_MyVpcPrivateSubnet1RouteTable8819E6E2_BE13C92D\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPrivateSubnet2RouteTableCEDCEECE_2B95A4E0\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet1RouteTableC46AB2F4_894E543B\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet2RouteTable1DF17386_AFF8759F\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            }
          },
          \\"aws_route_table_association\\": {
            \\"adapter_MyVpcPrivateSubnet1RouteTableAssociation56D38C7E_B9BA66CC\\": {
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPrivateSubnet1RouteTable8819E6E2_BE13C92D.id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPrivateSubnet1Subnet5057CF7E_D6B38AD7.id}\\"
            },
            \\"adapter_MyVpcPrivateSubnet2RouteTableAssociation86A610DA_460B6353\\": {
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPrivateSubnet2RouteTableCEDCEECE_2B95A4E0.id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPrivateSubnet2Subnet0040C983_374C20B3.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet1RouteTableAssociation2ECEE1CB_B80D4D3A\\": {
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPublicSubnet1RouteTableC46AB2F4_894E543B.id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPublicSubnet1SubnetF6608456_4A36A735.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet2RouteTableAssociation227DE78D_AF0411B6\\": {
              \\"route_table_id\\": \\"\${aws_route_table.adapter_MyVpcPublicSubnet2RouteTable1DF17386_AFF8759F.id}\\",
              \\"subnet_id\\": \\"\${aws_subnet.adapter_MyVpcPublicSubnet2Subnet492B6BFB_5AEAF4BB.id}\\"
            }
          },
          \\"aws_security_group\\": {
            \\"adapter_MyFargateServiceLBSecurityGroup6FBF16F1_96E1F589\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyFargateServiceSecurityGroup7016792A_A06941E3\\": {
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            }
          },
          \\"aws_security_group_rule\\": {
            \\"adapter_MyFargateServiceLBSecurityGrouptoadapterMyFargateServiceSecurityGroupE835E6748087E3E220_C3AF6774\\": {
              \\"description\\": \\"Load balancer to target\\",
              \\"from_port\\": 80,
              \\"to_port\\": 80
            },
            \\"adapter_MyFargateServiceSecurityGroupfromadapterMyFargateServiceLBSecurityGroup7AE4B86680CB48F98F_E0137FCF\\": {
              \\"description\\": \\"Load balancer to target\\",
              \\"from_port\\": 80,
              \\"source_security_group_id\\": \\"\${aws_security_group.adapter_MyFargateServiceLBSecurityGroup6FBF16F1_96E1F589.id}\\",
              \\"to_port\\": 80
            }
          },
          \\"aws_subnet\\": {
            \\"adapter_MyVpcPrivateSubnet1Subnet5057CF7E_D6B38AD7\\": {
              \\"availability_zone\\": \\"\${element(data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names, 0)}\\",
              \\"cidr_block\\": \\"10.0.128.0/18\\",
              \\"map_public_ip_on_launch\\": false,
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPrivateSubnet2Subnet0040C983_374C20B3\\": {
              \\"availability_zone\\": \\"\${element(data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names, 1)}\\",
              \\"cidr_block\\": \\"10.0.192.0/18\\",
              \\"map_public_ip_on_launch\\": false,
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet1SubnetF6608456_4A36A735\\": {
              \\"availability_zone\\": \\"\${element(data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names, 0)}\\",
              \\"cidr_block\\": \\"10.0.0.0/18\\",
              \\"map_public_ip_on_launch\\": true,
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            },
            \\"adapter_MyVpcPublicSubnet2Subnet492B6BFB_5AEAF4BB\\": {
              \\"availability_zone\\": \\"\${element(data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names, 1)}\\",
              \\"cidr_block\\": \\"10.0.64.0/18\\",
              \\"map_public_ip_on_launch\\": true,
              \\"vpc_id\\": \\"\${aws_vpc.adapter_MyVpcF9F0CA6F_D001559C.id}\\"
            }
          },
          \\"aws_vpc\\": {
            \\"adapter_MyVpcF9F0CA6F_D001559C\\": {
              \\"cidr_block\\": \\"10.0.0.0/16\\",
              \\"enable_dns_hostnames\\": true,
              \\"enable_dns_support\\": true,
              \\"instance_tenancy\\": \\"default\\"
            }
          },
          \\"time_sleep\\": {
            \\"adapter_MyFargateServiceTaskDefExecutionRoleD6305504_sleep_MyFargateServiceTaskDefExecutionRoleD6305504_BF1B53FF\\": {
              \\"create_duration\\": \\"20s\\",
              \\"depends_on\\": [
                \\"aws_iam_role.adapter_MyFargateServiceTaskDefExecutionRoleD6305504_680B3636\\"
              ],
              \\"destroy_duration\\": \\"0s\\",
              \\"provider\\": \\"time.awsadapter_eventual_consistency_workaround_aspect\\"
            },
            \\"adapter_MyFargateServiceTaskDefTaskRole62C7D397_sleep_MyFargateServiceTaskDefTaskRole62C7D397_BC1A03ED\\": {
              \\"create_duration\\": \\"20s\\",
              \\"depends_on\\": [
                \\"aws_iam_role.adapter_MyFargateServiceTaskDefTaskRole62C7D397_C55411E2\\"
              ],
              \\"destroy_duration\\": \\"0s\\",
              \\"provider\\": \\"time.awsadapter_eventual_consistency_workaround_aspect\\"
            }
          }
        },
        \\"terraform\\": {
          \\"required_providers\\": {
            \\"time\\": {
              \\"source\\": \\"time\\",
              \\"version\\": \\"~> 0.7.2\\"
            }
          }
        }
      }"
    `);
  });
});
