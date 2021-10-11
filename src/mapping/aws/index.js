"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const change_case_1 = require("change-case");
const fs = require("fs");
const path = require("path");
const provider_aws_1 = require("@cdktf/provider-aws");
const index_1 = require("../index");
// load all other files in this directory
fs.readdirSync(__dirname).forEach((file) => {
    if (file.endsWith(".js") && file !== "index.js") {
        require(path.resolve(__dirname, file));
    }
});
index_1.registerMapping("AWS::S3::Bucket", {
    resource: (scope, id, props) => {
        var _a, _b, _c, _d;
        const config = {};
        // versioninng
        if (((_a = props.VersioningConfiguration) === null || _a === void 0 ? void 0 : _a.Status) === "Enabled") {
            config.versioning = [{ enabled: true }];
            delete props.VersioningConfiguration;
        }
        const enc = (_d = (_c = (_b = props.BucketEncryption) === null || _b === void 0 ? void 0 : _b.ServerSideEncryptionConfiguration) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.ServerSideEncryptionByDefault;
        if (enc) {
            config.serverSideEncryptionConfiguration = [
                {
                    rule: [
                        {
                            applyServerSideEncryptionByDefault: [
                                {
                                    sseAlgorithm: enc.SSEAlgorithm,
                                    kmsMasterKeyId: enc.KMSMasterKeyID,
                                },
                            ],
                        },
                    ],
                },
            ];
            delete props.BucketEncryption;
        }
        const acl = props.AccessControl;
        delete props.AccessControl;
        if (acl) {
            config.acl = change_case_1.paramCase(acl);
        }
        const website = props.WebsiteConfiguration;
        if (website) {
            const websiteConfig = {};
            config.website = [websiteConfig];
            config.website = [
                {
                    indexDocument: website.IndexDocument,
                    errorDocument: website.ErrorDocument,
                    redirectAllRequestsTo: website.RedirectAllRequestsTo
                        ? (website.RedirectAllRequestsTo.Protocol
                            ? website.RedirectAllRequestsTo.Protocol + "://"
                            : "") + website.RedirectAllRequestsTo.HostName
                        : undefined,
                },
            ];
        }
        const bucketName = props.BucketName;
        delete props.BucketName;
        if (bucketName) {
            config.bucket = bucketName;
        }
        return new provider_aws_1.S3Bucket(scope, id, config);
    },
    attributes: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF3QztBQUN4Qyx5QkFBeUI7QUFDekIsNkJBQThCO0FBQzlCLHNEQUFnRjtBQUNoRixvQ0FBMkM7QUFHM0MseUNBQXlDO0FBQ3pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILHVCQUFlLENBQUMsaUJBQWlCLEVBQUU7SUFDakMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDN0IsTUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQztRQUU3QyxjQUFjO1FBQ2QsSUFBSSxPQUFBLEtBQUssQ0FBQyx1QkFBdUIsMENBQUUsTUFBTSxNQUFLLFNBQVMsRUFBRTtZQUN2RCxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUV4QyxPQUFPLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztTQUN0QztRQUVELE1BQU0sR0FBRyxxQkFDUCxLQUFLLENBQUMsZ0JBQWdCLDBDQUFFLGlDQUFpQywwQ0FBRyxDQUFDLDJDQUN6RCw2QkFBNkIsQ0FBQztRQUNwQyxJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxpQ0FBaUMsR0FBRztnQkFDekM7b0JBQ0UsSUFBSSxFQUFFO3dCQUNKOzRCQUNFLGtDQUFrQyxFQUFFO2dDQUNsQztvQ0FDRSxZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0NBQzlCLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYztpQ0FDbkM7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDL0I7UUFFRCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMzQixJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsdUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUUzQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sYUFBYSxHQUErQixFQUFFLENBQUM7WUFDckQsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWpDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2Y7b0JBQ0UsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO29CQUNwQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7b0JBQ3BDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxxQkFBcUI7d0JBQ2xELENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFROzRCQUNyQyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxLQUFLOzRCQUNoRCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVE7d0JBQ2xELENBQUMsQ0FBQyxTQUFTO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBRUQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDeEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUM1QjtRQUVELE9BQU8sSUFBSSx1QkFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFVBQVUsRUFBRSxFQUFFO0NBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyYW1DYXNlIH0gZnJvbSBcImNoYW5nZS1jYXNlXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5pbXBvcnQgeyBTM0J1Y2tldCwgUzNCdWNrZXRDb25maWcsIFMzQnVja2V0V2Vic2l0ZSB9IGZyb20gXCJAY2RrdGYvcHJvdmlkZXItYXdzXCI7XG5pbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFdyaXRlYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlLXV0aWxzXCI7XG5cbi8vIGxvYWQgYWxsIG90aGVyIGZpbGVzIGluIHRoaXMgZGlyZWN0b3J5XG5mcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgaWYgKGZpbGUuZW5kc1dpdGgoXCIuanNcIikgJiYgZmlsZSAhPT0gXCJpbmRleC5qc1wiKSB7XG4gICAgcmVxdWlyZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBmaWxlKSk7XG4gIH1cbn0pO1xuXG5yZWdpc3Rlck1hcHBpbmcoXCJBV1M6OlMzOjpCdWNrZXRcIiwge1xuICByZXNvdXJjZTogKHNjb3BlLCBpZCwgcHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25maWc6IFdyaXRlYWJsZTxTM0J1Y2tldENvbmZpZz4gPSB7fTtcblxuICAgIC8vIHZlcnNpb25pbm5nXG4gICAgaWYgKHByb3BzLlZlcnNpb25pbmdDb25maWd1cmF0aW9uPy5TdGF0dXMgPT09IFwiRW5hYmxlZFwiKSB7XG4gICAgICBjb25maWcudmVyc2lvbmluZyA9IFt7IGVuYWJsZWQ6IHRydWUgfV07XG5cbiAgICAgIGRlbGV0ZSBwcm9wcy5WZXJzaW9uaW5nQ29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBlbmMgPVxuICAgICAgcHJvcHMuQnVja2V0RW5jcnlwdGlvbj8uU2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uPy5bMF1cbiAgICAgICAgPy5TZXJ2ZXJTaWRlRW5jcnlwdGlvbkJ5RGVmYXVsdDtcbiAgICBpZiAoZW5jKSB7XG4gICAgICBjb25maWcuc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gW1xuICAgICAgICB7XG4gICAgICAgICAgcnVsZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhcHBseVNlcnZlclNpZGVFbmNyeXB0aW9uQnlEZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3NlQWxnb3JpdGhtOiBlbmMuU1NFQWxnb3JpdGhtLFxuICAgICAgICAgICAgICAgICAga21zTWFzdGVyS2V5SWQ6IGVuYy5LTVNNYXN0ZXJLZXlJRCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXTtcblxuICAgICAgZGVsZXRlIHByb3BzLkJ1Y2tldEVuY3J5cHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYWNsID0gcHJvcHMuQWNjZXNzQ29udHJvbDtcbiAgICBkZWxldGUgcHJvcHMuQWNjZXNzQ29udHJvbDtcbiAgICBpZiAoYWNsKSB7XG4gICAgICBjb25maWcuYWNsID0gcGFyYW1DYXNlKGFjbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2Vic2l0ZSA9IHByb3BzLldlYnNpdGVDb25maWd1cmF0aW9uO1xuXG4gICAgaWYgKHdlYnNpdGUpIHtcbiAgICAgIGNvbnN0IHdlYnNpdGVDb25maWc6IFdyaXRlYWJsZTxTM0J1Y2tldFdlYnNpdGU+ID0ge307XG4gICAgICBjb25maWcud2Vic2l0ZSA9IFt3ZWJzaXRlQ29uZmlnXTtcblxuICAgICAgY29uZmlnLndlYnNpdGUgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRleERvY3VtZW50OiB3ZWJzaXRlLkluZGV4RG9jdW1lbnQsXG4gICAgICAgICAgZXJyb3JEb2N1bWVudDogd2Vic2l0ZS5FcnJvckRvY3VtZW50LFxuICAgICAgICAgIHJlZGlyZWN0QWxsUmVxdWVzdHNUbzogd2Vic2l0ZS5SZWRpcmVjdEFsbFJlcXVlc3RzVG9cbiAgICAgICAgICAgID8gKHdlYnNpdGUuUmVkaXJlY3RBbGxSZXF1ZXN0c1RvLlByb3RvY29sXG4gICAgICAgICAgICAgICAgPyB3ZWJzaXRlLlJlZGlyZWN0QWxsUmVxdWVzdHNUby5Qcm90b2NvbCArIFwiOi8vXCJcbiAgICAgICAgICAgICAgICA6IFwiXCIpICsgd2Vic2l0ZS5SZWRpcmVjdEFsbFJlcXVlc3RzVG8uSG9zdE5hbWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBidWNrZXROYW1lID0gcHJvcHMuQnVja2V0TmFtZTtcbiAgICBkZWxldGUgcHJvcHMuQnVja2V0TmFtZTtcbiAgICBpZiAoYnVja2V0TmFtZSkge1xuICAgICAgY29uZmlnLmJ1Y2tldCA9IGJ1Y2tldE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTM0J1Y2tldChzY29wZSwgaWQsIGNvbmZpZyk7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHt9LFxufSk7XG4iXX0=