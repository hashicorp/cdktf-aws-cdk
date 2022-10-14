import { IResolver, License } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

const SPDX = "MPL-2.0";

export class CustomizedLicense extends License {
  constructor(project: TypeScriptProject) {
    super(project, { spdx: SPDX });

    project.addFields({ license: SPDX });
  }

  synthesizeContent(resolver: IResolver) {
    return (
      "Copyright (c) 2021 HashiCorp, Inc.\n\n" +
      super.synthesizeContent(resolver)
    );
  }
}
