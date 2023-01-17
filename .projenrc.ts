import { CdktfAwsCdkProject } from "./projen";

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: "0.15.0",
  constructsVersion: "^10.0.25",
  minNodeVersion: "14.17.0",
  projenrcTs: true,
});

project.synth();
