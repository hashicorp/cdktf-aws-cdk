"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const index_1 = require("../index");
const awscc = require("../../../.gen/providers/awscc");
const awscc_name_map_1 = require("../../awscc_schemas/awscc-name-map");
const util_1 = require("./util");
const es2019_1 = require("../../es2019");
const debug = debug_1.default("tf-aws-adapter:awscc:debug");
const trace = debug_1.default("tf-aws-adapter:awscc:trace");
const overrides = {
    // FIXME: add function to register these, and export that function aswell
    "AWS::CloudFront::Distribution": {
        attributes: {
            Ref: (res) => res.id,
            Arn: () => {
                throw new Error("Cloudfront Distributions have no Arn");
            },
        },
    },
    "AWS::Lambda::Function": {
        props: {
            // beforeMapping: (props: { code: any }) => {
            //   if (props.code) {
            //     if (typeof props.code?.ZipFile !== 'string') {
            //       throw new Error('AWS::Lambda::Function > Code currently only supports ZipFile')
            //     }
            //     props.code = props.code.ZipFile;
            //   }
            // }
            afterMapping: (cdktfProps) => {
                var _a, _b, _c, _d;
                // these are defaults that are currently not part of the schema and thus needed to be specified manually:
                // https://github.com/hashicorp/terraform-provider-awscc/blob/main/internal/service/cloudformation/schemas/AWS_Lambda_Function.json
                cdktfProps.fileSystemConfigs = (_a = cdktfProps.fileSystemConfigs) !== null && _a !== void 0 ? _a : [];
                cdktfProps.memorySize = (_b = cdktfProps.memorySize) !== null && _b !== void 0 ? _b : 128;
                cdktfProps.tracingConfig = (_c = cdktfProps.tracingConfig) !== null && _c !== void 0 ? _c : {
                    mode: "PassThrough",
                };
                if ((_d = cdktfProps.code) === null || _d === void 0 ? void 0 : _d.zipFile) {
                    cdktfProps.packageType = "Zip";
                }
            },
        },
    },
};
const resources = Object.entries(awscc)
    .filter(([_key, entry]) => !entry.name.startsWith("DataAwscc") && // exclude datasources – there's no good way to inspect the constructor
    typeof entry.tfResourceType === "string" &&
    entry.tfResourceType !== "awscc" // exclude provider with name "awscc"
)
    .map(([_key, entry]) => [entry.tfResourceType, entry]);
// next line equals: const resourceMap = Object.fromEntries(resources); (which did not work with JSII)
const resourceMap = es2019_1.objectFromEntries(resources);
Object.entries(awscc_name_map_1.awsccNameMap).forEach(([tfName, cfnName]) => {
    const Resource = resourceMap[tfName];
    if (Resource) {
        trace(`auto mapping ${cfnName} => ${tfName} (${Resource.name})`);
        const override = overrides[cfnName];
        index_1.registerMapping(cfnName, {
            resource: (scope, id, props) => {
                var _a, _b, _c, _d;
                trace(`original (cfn) props for awscc Resource ${Resource.name}: ${JSON.stringify(props, null, 2)}`);
                (_b = (_a = override === null || override === void 0 ? void 0 : override.props) === null || _a === void 0 ? void 0 : _a.beforeMapping) === null || _b === void 0 ? void 0 : _b.call(_a, props);
                const convertedProps = {};
                Object.entries(props).forEach(([cfnAttribute, value]) => {
                    const tfAttr = util_1.convertCloudFormationPropertyToCDKTFAttribute(cfnAttribute);
                    function convertObjectKeys(value) {
                        if (typeof value === "object" && value !== null) {
                            Object.keys(value).forEach((key) => {
                                const tfKey = util_1.convertCloudFormationPropertyToCDKTFAttribute(key);
                                value[tfKey] = convertObjectKeys(value[key]);
                                delete value[key];
                            });
                        }
                        return value;
                    }
                    convertedProps[tfAttr] = convertObjectKeys(value);
                    delete props[cfnAttribute];
                });
                (_d = (_c = override === null || override === void 0 ? void 0 : override.props) === null || _c === void 0 ? void 0 : _c.afterMapping) === null || _d === void 0 ? void 0 : _d.call(_c, convertedProps);
                debug(`converted props for awscc Resource ${Resource.name}: ${JSON.stringify(convertedProps, null, 2)}`);
                return new Resource(scope, id, convertedProps);
            },
            attributes: {
                Arn: (res) => res.arn,
                Ref: (res) => res.id,
                ...override === null || override === void 0 ? void 0 : override.attributes,
            },
        });
    }
    else {
        trace(`no auto mapping found for ${cfnName}. It probably was skipped in awscc provider generation`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnQztBQUNoQyxvQ0FBb0Q7QUFDcEQsdURBQXVEO0FBQ3ZELHVFQUFrRTtBQUVsRSxpQ0FBdUU7QUFFdkUseUNBQWlEO0FBRWpELE1BQU0sS0FBSyxHQUFHLGVBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ3hELE1BQU0sS0FBSyxHQUFHLGVBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBVXhELE1BQU0sU0FBUyxHQUVYO0lBQ0YseUVBQXlFO0lBQ3pFLCtCQUErQixFQUFFO1FBQy9CLFVBQVUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDLEdBQWlDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQzFELENBQUM7U0FDRjtLQUNGO0lBQ0QsdUJBQXVCLEVBQUU7UUFDdkIsS0FBSyxFQUFFO1lBQ0wsNkNBQTZDO1lBQzdDLHNCQUFzQjtZQUN0QixxREFBcUQ7WUFDckQsd0ZBQXdGO1lBQ3hGLFFBQVE7WUFDUix1Q0FBdUM7WUFDdkMsTUFBTTtZQUVOLElBQUk7WUFDSixZQUFZLEVBQUUsQ0FBQyxVQUFpRCxFQUFFLEVBQUU7O2dCQUNsRSx5R0FBeUc7Z0JBQ3pHLG1JQUFtSTtnQkFDbkksVUFBVSxDQUFDLGlCQUFpQixTQUFHLFVBQVUsQ0FBQyxpQkFBaUIsbUNBQUksRUFBRSxDQUFDO2dCQUNsRSxVQUFVLENBQUMsVUFBVSxTQUFHLFVBQVUsQ0FBQyxVQUFVLG1DQUFJLEdBQUcsQ0FBQztnQkFDckQsVUFBVSxDQUFDLGFBQWEsU0FBRyxVQUFVLENBQUMsYUFBYSxtQ0FBSTtvQkFDckQsSUFBSSxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7Z0JBQ0YsVUFBSSxVQUFVLENBQUMsSUFB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QkFFaEQsS0FBSyxDQUNILHNDQUNFLFFBQVEsQ0FBQyxJQUNYLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQy9DLENBQUM7Z0JBRUYsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLGNBQWMsQ0FBc0IsQ0FBQztZQUN0RSxDQUFDO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQzFCLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFVBQVU7YUFDeEI7U0FDRixDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsS0FBSyxDQUNILDZCQUE2QixPQUFPLHdEQUF3RCxDQUM3RixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IE1hcHBpbmcsIHJlZ2lzdGVyTWFwcGluZyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0ICogYXMgYXdzY2MgZnJvbSBcIi4uLy4uLy4uLy5nZW4vcHJvdmlkZXJzL2F3c2NjXCI7XG5pbXBvcnQgeyBhd3NjY05hbWVNYXAgfSBmcm9tIFwiLi4vLi4vYXdzY2Nfc2NoZW1hcy9hd3NjYy1uYW1lLW1hcFwiO1xuaW1wb3J0IHsgVGVycmFmb3JtUmVzb3VyY2UgfSBmcm9tIFwiY2RrdGZcIjtcbmltcG9ydCB7IGNvbnZlcnRDbG91ZEZvcm1hdGlvblByb3BlcnR5VG9DREtURkF0dHJpYnV0ZSB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IFdyaXRlYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlLXV0aWxzXCI7XG5pbXBvcnQgeyBvYmplY3RGcm9tRW50cmllcyB9IGZyb20gXCIuLi8uLi9lczIwMTlcIjtcblxuY29uc3QgZGVidWcgPSBjcmVhdGVEZWJ1ZyhcInRmLWF3cy1hZGFwdGVyOmF3c2NjOmRlYnVnXCIpO1xuY29uc3QgdHJhY2UgPSBjcmVhdGVEZWJ1ZyhcInRmLWF3cy1hZGFwdGVyOmF3c2NjOnRyYWNlXCIpO1xuXG50eXBlIE92ZXJyaWRlPFQgZXh0ZW5kcyBUZXJyYWZvcm1SZXNvdXJjZT4gPSB7XG4gIGF0dHJpYnV0ZXM/OiBQYXJ0aWFsPE1hcHBpbmc8VD5bXCJhdHRyaWJ1dGVzXCJdPjtcbiAgcHJvcHM/OiB7XG4gICAgYmVmb3JlTWFwcGluZz86IChjZm5Qcm9wczogYW55KSA9PiB2b2lkOyAvLyBlLmcuIGFsbG93cyB0byAoaW4gcGxhY2UpIHJlbW92ZSBwcm9wcyBiZWZvcmUgdGhleSBhcmUgbWFwcGVkIHRvIENES1RGIG5hbWluZ1xuICAgIGFmdGVyTWFwcGluZz86IChjZGt0ZlByb3BzOiBhbnkpID0+IHZvaWQ7IC8vIGFsbG93cyB0byAoaW4gcGxhY2UpIGFkZCBkZWZhdWx0cyBhZnRlciBwcm9wcyBoYXZlIGJlZW4gY29udmVydGVkIHRvIENES1RGIG5hbWluZyAoZS5nLiBpZiBhIHByb3AgaXMgcmVxdWlyZWQgaW4gVEYgYnV0IG5vdCBpbiBDRilcbiAgfTtcbn07XG5cbmNvbnN0IG92ZXJyaWRlczoge1xuICBbY2ZuTmFtZTogc3RyaW5nXTogT3ZlcnJpZGU8YW55PiB8IHVuZGVmaW5lZDtcbn0gPSB7XG4gIC8vIEZJWE1FOiBhZGQgZnVuY3Rpb24gdG8gcmVnaXN0ZXIgdGhlc2UsIGFuZCBleHBvcnQgdGhhdCBmdW5jdGlvbiBhc3dlbGxcbiAgXCJBV1M6OkNsb3VkRnJvbnQ6OkRpc3RyaWJ1dGlvblwiOiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUmVmOiAocmVzOiBhd3NjYy5DbG91ZGZyb250RGlzdHJpYnV0aW9uKSA9PiByZXMuaWQsXG4gICAgICBBcm46ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xvdWRmcm9udCBEaXN0cmlidXRpb25zIGhhdmUgbm8gQXJuXCIpO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBcIkFXUzo6TGFtYmRhOjpGdW5jdGlvblwiOiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC8vIGJlZm9yZU1hcHBpbmc6IChwcm9wczogeyBjb2RlOiBhbnkgfSkgPT4ge1xuICAgICAgLy8gICBpZiAocHJvcHMuY29kZSkge1xuICAgICAgLy8gICAgIGlmICh0eXBlb2YgcHJvcHMuY29kZT8uWmlwRmlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcignQVdTOjpMYW1iZGE6OkZ1bmN0aW9uID4gQ29kZSBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBaaXBGaWxlJylcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgICAgcHJvcHMuY29kZSA9IHByb3BzLmNvZGUuWmlwRmlsZTtcbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyB9XG4gICAgICBhZnRlck1hcHBpbmc6IChjZGt0ZlByb3BzOiBXcml0ZWFibGU8YXdzY2MuTGFtYmRhRnVuY3Rpb25Db25maWc+KSA9PiB7XG4gICAgICAgIC8vIHRoZXNlIGFyZSBkZWZhdWx0cyB0aGF0IGFyZSBjdXJyZW50bHkgbm90IHBhcnQgb2YgdGhlIHNjaGVtYSBhbmQgdGh1cyBuZWVkZWQgdG8gYmUgc3BlY2lmaWVkIG1hbnVhbGx5OlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFzaGljb3JwL3RlcnJhZm9ybS1wcm92aWRlci1hd3NjYy9ibG9iL21haW4vaW50ZXJuYWwvc2VydmljZS9jbG91ZGZvcm1hdGlvbi9zY2hlbWFzL0FXU19MYW1iZGFfRnVuY3Rpb24uanNvblxuICAgICAgICBjZGt0ZlByb3BzLmZpbGVTeXN0ZW1Db25maWdzID0gY2RrdGZQcm9wcy5maWxlU3lzdGVtQ29uZmlncyA/PyBbXTtcbiAgICAgICAgY2RrdGZQcm9wcy5tZW1vcnlTaXplID0gY2RrdGZQcm9wcy5tZW1vcnlTaXplID8/IDEyODtcbiAgICAgICAgY2RrdGZQcm9wcy50cmFjaW5nQ29uZmlnID0gY2RrdGZQcm9wcy50cmFjaW5nQ29uZmlnID8/IHtcbiAgICAgICAgICBtb2RlOiBcIlBhc3NUaHJvdWdoXCIsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChjZGt0ZlByb3BzLmNvZGU/LnppcEZpbGUpIHtcbiAgICAgICAgICBjZGt0ZlByb3BzLnBhY2thZ2VUeXBlID0gXCJaaXBcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgcmVzb3VyY2VzID0gT2JqZWN0LmVudHJpZXMoYXdzY2MpXG4gIC5maWx0ZXIoXG4gICAgKFtfa2V5LCBlbnRyeV0pID0+XG4gICAgICAhKGVudHJ5IGFzIGFueSkubmFtZS5zdGFydHNXaXRoKFwiRGF0YUF3c2NjXCIpICYmIC8vIGV4Y2x1ZGUgZGF0YXNvdXJjZXMg4oCTIHRoZXJlJ3Mgbm8gZ29vZCB3YXkgdG8gaW5zcGVjdCB0aGUgY29uc3RydWN0b3JcbiAgICAgIHR5cGVvZiAoZW50cnkgYXMgYW55KS50ZlJlc291cmNlVHlwZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgKGVudHJ5IGFzIGFueSkudGZSZXNvdXJjZVR5cGUgIT09IFwiYXdzY2NcIiAvLyBleGNsdWRlIHByb3ZpZGVyIHdpdGggbmFtZSBcImF3c2NjXCJcbiAgKVxuICAubWFwKFxuICAgIChbX2tleSwgZW50cnldKSA9PiBbKGVudHJ5IGFzIGFueSkudGZSZXNvdXJjZVR5cGUsIGVudHJ5IGFzIGFueV0gYXMgY29uc3RcbiAgKTtcblxuLy8gbmV4dCBsaW5lIGVxdWFsczogY29uc3QgcmVzb3VyY2VNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMocmVzb3VyY2VzKTsgKHdoaWNoIGRpZCBub3Qgd29yayB3aXRoIEpTSUkpXG5jb25zdCByZXNvdXJjZU1hcCA9IG9iamVjdEZyb21FbnRyaWVzKHJlc291cmNlcyk7XG5cbk9iamVjdC5lbnRyaWVzKGF3c2NjTmFtZU1hcCkuZm9yRWFjaCgoW3RmTmFtZSwgY2ZuTmFtZV0pID0+IHtcbiAgY29uc3QgUmVzb3VyY2UgPSByZXNvdXJjZU1hcFt0Zk5hbWVdO1xuXG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHRyYWNlKGBhdXRvIG1hcHBpbmcgJHtjZm5OYW1lfSA9PiAke3RmTmFtZX0gKCR7UmVzb3VyY2UubmFtZX0pYCk7XG5cbiAgICBjb25zdCBvdmVycmlkZSA9IG92ZXJyaWRlc1tjZm5OYW1lXTtcbiAgICByZWdpc3Rlck1hcHBpbmcoY2ZuTmFtZSwge1xuICAgICAgcmVzb3VyY2U6IChzY29wZSwgaWQsIHByb3BzKSA9PiB7XG4gICAgICAgIHRyYWNlKFxuICAgICAgICAgIGBvcmlnaW5hbCAoY2ZuKSBwcm9wcyBmb3IgYXdzY2MgUmVzb3VyY2UgJHtcbiAgICAgICAgICAgIFJlc291cmNlLm5hbWVcbiAgICAgICAgICB9OiAke0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX1gXG4gICAgICAgICk7XG5cbiAgICAgICAgb3ZlcnJpZGU/LnByb3BzPy5iZWZvcmVNYXBwaW5nPy4ocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZvckVhY2goKFtjZm5BdHRyaWJ1dGUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRmQXR0ciA9XG4gICAgICAgICAgICBjb252ZXJ0Q2xvdWRGb3JtYXRpb25Qcm9wZXJ0eVRvQ0RLVEZBdHRyaWJ1dGUoY2ZuQXR0cmlidXRlKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRPYmplY3RLZXlzKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGZLZXkgPVxuICAgICAgICAgICAgICAgICAgY29udmVydENsb3VkRm9ybWF0aW9uUHJvcGVydHlUb0NES1RGQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWVbdGZLZXldID0gY29udmVydE9iamVjdEtleXModmFsdWVba2V5XSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tleV07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnZlcnRlZFByb3BzW3RmQXR0cl0gPSBjb252ZXJ0T2JqZWN0S2V5cyh2YWx1ZSk7XG4gICAgICAgICAgZGVsZXRlIHByb3BzW2NmbkF0dHJpYnV0ZV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJyaWRlPy5wcm9wcz8uYWZ0ZXJNYXBwaW5nPy4oY29udmVydGVkUHJvcHMpO1xuXG4gICAgICAgIGRlYnVnKFxuICAgICAgICAgIGBjb252ZXJ0ZWQgcHJvcHMgZm9yIGF3c2NjIFJlc291cmNlICR7XG4gICAgICAgICAgICBSZXNvdXJjZS5uYW1lXG4gICAgICAgICAgfTogJHtKU09OLnN0cmluZ2lmeShjb252ZXJ0ZWRQcm9wcywgbnVsbCwgMil9YFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVzb3VyY2Uoc2NvcGUsIGlkLCBjb252ZXJ0ZWRQcm9wcykgYXMgVGVycmFmb3JtUmVzb3VyY2U7XG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBBcm46IChyZXM6IGFueSkgPT4gcmVzLmFybiwgLy8gVE9ETzogdGhpcyBjYW4gZmFpbCwgY2F0Y2ggaW5zaWRlIG9mIGZ1bmN0aW9uPyB3ZSBjb3VsZCBjaGVjayBmb3IgdW5kZWZpbmVkIGZpcnN0IGFuZCBwcmludCBhIG5pY2UgZXJyIG1zZyBmb3IgdGhlIHVzZXJcbiAgICAgICAgUmVmOiAocmVzOiBhbnkpID0+IHJlcy5pZCwgLy8gVE9ETzogdGhpcyBjYW4gZmFpbCB0b29cbiAgICAgICAgLi4ub3ZlcnJpZGU/LmF0dHJpYnV0ZXMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRyYWNlKFxuICAgICAgYG5vIGF1dG8gbWFwcGluZyBmb3VuZCBmb3IgJHtjZm5OYW1lfS4gSXQgcHJvYmFibHkgd2FzIHNraXBwZWQgaW4gYXdzY2MgcHJvdmlkZXIgZ2VuZXJhdGlvbmBcbiAgICApO1xuICB9XG59KTtcbiJdfQ==