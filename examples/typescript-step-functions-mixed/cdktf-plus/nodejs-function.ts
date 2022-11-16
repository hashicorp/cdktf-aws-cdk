// source: https://github.com/cdktf-plus/cdktf-plus/blob/586aabad3ab2fb2a2e93e05ed33f94474ebe9397/packages/%40cdktf-plus/aws/lib/nodejs-function/index.ts
import * as path from 'path';
import { TerraformAsset, AssetType } from 'cdktf';
import { Construct } from 'constructs';
// This might be 10x slower than a native build - see https://esbuild.github.io/getting-started/#wasm
import { buildSync } from 'esbuild-wasm';
import { AwsLambdaFunction, AwsLambdaFunctionConfig } from './aws-lambda-function';

export interface NodejsFunctionConfig extends AwsLambdaFunctionConfig {
  readonly path: string;
  readonly external?: string[];
}

const bundle = (workingDirectory: string, entryPoint: string, external?: string[]) => {
  buildSync({
    entryPoints: [entryPoint],
    platform: 'node',
    target: 'es2018',
    bundle: true,
    format: 'cjs',
    sourcemap: 'external',
    external,
    outdir: 'dist',
    absWorkingDir: workingDirectory,
  });

  return path.join(workingDirectory, 'dist');
};

export class NodejsFunction extends AwsLambdaFunction {
  public readonly asset: TerraformAsset;
  public readonly bundledPath: string;

  constructor(scope: Construct, id: string, config: NodejsFunctionConfig) {
    const { path: filePath, ...rest } = config;
    super(scope, id, rest);

    const workingDirectory = path.resolve(path.dirname(config.path));
    const distPath = bundle(workingDirectory, path.basename(config.path), config.external);
    this.bundledPath = path.join(distPath, `${path.basename(config.path, '.ts')}.js`);

    this.asset = new TerraformAsset(this, 'lambda-asset', {
      path: distPath,
      type: AssetType.ARCHIVE,
    });

    const fileName = path.basename(config.path, '.ts');

    this.fn.handler = `${fileName}.handler`;
    this.fn.filename = this.asset.path;
    this.fn.sourceCodeHash = this.asset.assetHash;
    this.fn.runtime = 'nodejs14.x';
  }
}