import { CdktfAwsCdkProject } from "./projen";

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: '0.8.0-pre.2',
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.15.0",
  projenrcTs: true
});

project.synth();
