"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCloudFormationPropertyToTFAttribute = exports.convertCloudFormationPropertyToCDKTFAttribute = void 0;
const codemaker_1 = require("codemaker");
// TODO: expose the name conflict replacement functionality that is used from this in a better way
const attribute_model_1 = require("cdktf-cli/lib/get/generator/models/attribute-model");
const propertyNameReplacements = {
    CloudFormation: "Cloudformation",
    CloudFront: "Cloudfront",
    CloudWatch: "Cloudwatch",
    FSx: "Fsx",
};
function convertCloudFormationPropertyToCDKTFAttribute(cfnAttributeName) {
    const tfAttribute = convertCloudFormationPropertyToTFAttribute(cfnAttributeName);
    const cdktfAttribute = codemaker_1.toCamelCase(tfAttribute);
    const tmp = new attribute_model_1.AttributeModel({
        name: cdktfAttribute,
        computed: false,
        optional: false,
        provider: false,
        required: false,
        storageName: "",
        terraformFullName: "",
        terraformName: "",
        type: null,
    });
    // tmp.name is getter and does more than returning the name we supplied as input
    const conflictFreeCdktfAttribute = tmp.name;
    return conflictFreeCdktfAttribute;
}
exports.convertCloudFormationPropertyToCDKTFAttribute = convertCloudFormationPropertyToCDKTFAttribute;
// reimplementation of naming.go from terraform-provider-awscc
// TODO: use WebAssembly to reuse naming.go
function convertCloudFormationPropertyToTFAttribute(cfnAttributeName) {
    let propertyName = cfnAttributeName.trim();
    if (propertyName === "") {
        return propertyName;
    }
    for (let replacement in Object.entries(propertyNameReplacements)) {
        const [old, new_] = replacement;
        propertyName = propertyName.replace(new RegExp(old, "g"), new_);
    }
    let attributeName = "";
    for (let i = 0; i < propertyName.length; i++) {
        let ch = propertyName.charAt(i);
        const isCap = isCapitalLetter(ch);
        const isLow = isLowercaseLetter(ch);
        const isDig = isNumeric(ch);
        if (isCap) {
            ch = toLowercaseLetter(ch);
        }
        if (i < propertyName.length - 1) {
            let nextCh = propertyName[i + 1];
            let nextIsCap = isCapitalLetter(nextCh);
            let nextIsLow = isLowercaseLetter(nextCh);
            let nextIsDig = isNumeric(nextCh);
            // Append underscore if case changes.
            if ((isCap && nextIsLow) ||
                (isLow && (nextIsCap || nextIsDig)) ||
                (isDig && (nextIsCap || nextIsLow))) {
                if (isCap && nextIsLow) {
                    const prevIsCap = i > 0 && isCapitalLetter(propertyName[i - 1]);
                    if (prevIsCap) {
                        attributeName += "_";
                    }
                }
                attributeName += ch;
                if (isLow || isDig) {
                    attributeName += "_";
                }
                continue;
            }
        }
        if (isCap || isLow || isDig) {
            attributeName += ch;
        }
        else {
            attributeName += "_";
        }
    }
    return attributeName;
}
exports.convertCloudFormationPropertyToTFAttribute = convertCloudFormationPropertyToTFAttribute;
function isCapitalLetter(ch) {
    return ch >= "A" && ch <= "Z";
}
function isLowercaseLetter(ch) {
    return ch >= "a" && ch <= "z";
}
function isNumeric(ch) {
    return ch >= "0" && ch <= "9";
}
function toLowercaseLetter(ch) {
    return ch.toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXdDO0FBQ3hDLGtHQUFrRztBQUNsRyx3RkFBb0Y7QUFFcEYsTUFBTSx3QkFBd0IsR0FBRztJQUMvQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLEdBQUcsRUFBRSxLQUFLO0NBQ1gsQ0FBQztBQUVGLFNBQWdCLDZDQUE2QyxDQUMzRCxnQkFBd0I7SUFFeEIsTUFBTSxXQUFXLEdBQ2YsMENBQTBDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUUvRCxNQUFNLGNBQWMsR0FBRyx1QkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWhELE1BQU0sR0FBRyxHQUFHLElBQUksZ0NBQWMsQ0FBQztRQUM3QixJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixhQUFhLEVBQUUsRUFBRTtRQUNqQixJQUFJLEVBQUUsSUFBVztLQUNsQixDQUFDLENBQUM7SUFFSCxnRkFBZ0Y7SUFDaEYsTUFBTSwwQkFBMEIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRTVDLE9BQU8sMEJBQTBCLENBQUM7QUFDcEMsQ0FBQztBQXhCRCxzR0F3QkM7QUFFRCw4REFBOEQ7QUFDOUQsMkNBQTJDO0FBQzNDLFNBQWdCLDBDQUEwQyxDQUN4RCxnQkFBd0I7SUFFeEIsSUFBSSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFM0MsSUFBSSxZQUFZLEtBQUssRUFBRSxFQUFFO1FBQ3ZCLE9BQU8sWUFBWSxDQUFDO0tBQ3JCO0lBRUQsS0FBSyxJQUFJLFdB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bENhc2UgfSBmcm9tIFwiY29kZW1ha2VyXCI7XG4vLyBUT0RPOiBleHBvc2UgdGhlIG5hbWUgY29uZmxpY3QgcmVwbGFjZW1lbnQgZnVuY3Rpb25hbGl0eSB0aGF0IGlzIHVzZWQgZnJvbSB0aGlzIGluIGEgYmV0dGVyIHdheVxuaW1wb3J0IHsgQXR0cmlidXRlTW9kZWwgfSBmcm9tIFwiY2RrdGYtY2xpL2xpYi9nZXQvZ2VuZXJhdG9yL21vZGVscy9hdHRyaWJ1dGUtbW9kZWxcIjtcblxuY29uc3QgcHJvcGVydHlOYW1lUmVwbGFjZW1lbnRzID0ge1xuICBDbG91ZEZvcm1hdGlvbjogXCJDbG91ZGZvcm1hdGlvblwiLFxuICBDbG91ZEZyb250OiBcIkNsb3VkZnJvbnRcIixcbiAgQ2xvdWRXYXRjaDogXCJDbG91ZHdhdGNoXCIsXG4gIEZTeDogXCJGc3hcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2xvdWRGb3JtYXRpb25Qcm9wZXJ0eVRvQ0RLVEZBdHRyaWJ1dGUoXG4gIGNmbkF0dHJpYnV0ZU5hbWU6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgY29uc3QgdGZBdHRyaWJ1dGUgPVxuICAgIGNvbnZlcnRDbG91ZEZvcm1hdGlvblByb3BlcnR5VG9URkF0dHJpYnV0ZShjZm5BdHRyaWJ1dGVOYW1lKTtcblxuICBjb25zdCBjZGt0ZkF0dHJpYnV0ZSA9IHRvQ2FtZWxDYXNlKHRmQXR0cmlidXRlKTtcblxuICBjb25zdCB0bXAgPSBuZXcgQXR0cmlidXRlTW9kZWwoe1xuICAgIG5hbWU6IGNka3RmQXR0cmlidXRlLFxuICAgIGNvbXB1dGVkOiBmYWxzZSxcbiAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgcHJvdmlkZXI6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBzdG9yYWdlTmFtZTogXCJcIixcbiAgICB0ZXJyYWZvcm1GdWxsTmFtZTogXCJcIixcbiAgICB0ZXJyYWZvcm1OYW1lOiBcIlwiLFxuICAgIHR5cGU6IG51bGwgYXMgYW55LFxuICB9KTtcblxuICAvLyB0bXAubmFtZSBpcyBnZXR0ZXIgYW5kIGRvZXMgbW9yZSB0aGFuIHJldHVybmluZyB0aGUgbmFtZSB3ZSBzdXBwbGllZCBhcyBpbnB1dFxuICBjb25zdCBjb25mbGljdEZyZWVDZGt0ZkF0dHJpYnV0ZSA9IHRtcC5uYW1lO1xuXG4gIHJldHVybiBjb25mbGljdEZyZWVDZGt0ZkF0dHJpYnV0ZTtcbn1cblxuLy8gcmVpbXBsZW1lbnRhdGlvbiBvZiBuYW1pbmcuZ28gZnJvbSB0ZXJyYWZvcm0tcHJvdmlkZXItYXdzY2Ncbi8vIFRPRE86IHVzZSBXZWJBc3NlbWJseSB0byByZXVzZSBuYW1pbmcuZ29cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2xvdWRGb3JtYXRpb25Qcm9wZXJ0eVRvVEZBdHRyaWJ1dGUoXG4gIGNmbkF0dHJpYnV0ZU5hbWU6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGNmbkF0dHJpYnV0ZU5hbWUudHJpbSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICB9XG5cbiAgZm9yIChsZXQgcmVwbGFjZW1lbnQgaW4gT2JqZWN0LmVudHJpZXMocHJvcGVydHlOYW1lUmVwbGFjZW1lbnRzKSkge1xuICAgIGNvbnN0IFtvbGQsIG5ld19dID0gcmVwbGFjZW1lbnQ7XG4gICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChvbGQsIFwiZ1wiKSwgbmV3Xyk7XG4gIH1cblxuICBsZXQgYXR0cmlidXRlTmFtZSA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2ggPSBwcm9wZXJ0eU5hbWUuY2hhckF0KGkpO1xuXG4gICAgY29uc3QgaXNDYXAgPSBpc0NhcGl0YWxMZXR0ZXIoY2gpO1xuICAgIGNvbnN0IGlzTG93ID0gaXNMb3dlcmNhc2VMZXR0ZXIoY2gpO1xuICAgIGNvbnN0IGlzRGlnID0gaXNOdW1lcmljKGNoKTtcblxuICAgIGlmIChpc0NhcCkge1xuICAgICAgY2ggPSB0b0xvd2VyY2FzZUxldHRlcihjaCk7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBwcm9wZXJ0eU5hbWUubGVuZ3RoIC0gMSkge1xuICAgICAgbGV0IG5leHRDaCA9IHByb3BlcnR5TmFtZVtpICsgMV07XG4gICAgICBsZXQgbmV4dElzQ2FwID0gaXNDYXBpdGFsTGV0dGVyKG5leHRDaCk7XG4gICAgICBsZXQgbmV4dElzTG93ID0gaXNMb3dlcmNhc2VMZXR0ZXIobmV4dENoKTtcbiAgICAgIGxldCBuZXh0SXNEaWcgPSBpc051bWVyaWMobmV4dENoKTtcblxuICAgICAgLy8gQXBwZW5kIHVuZGVyc2NvcmUgaWYgY2FzZSBjaGFuZ2VzLlxuICAgICAgaWYgKFxuICAgICAgICAoaXNDYXAgJiYgbmV4dElzTG93KSB8fFxuICAgICAgICAoaXNMb3cgJiYgKG5leHRJc0NhcCB8fCBuZXh0SXNEaWcpKSB8fFxuICAgICAgICAoaXNEaWcgJiYgKG5leHRJc0NhcCB8fCBuZXh0SXNMb3cpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpc0NhcCAmJiBuZXh0SXNMb3cpIHtcbiAgICAgICAgICBjb25zdCBwcmV2SXNDYXAgPSBpID4gMCAmJiBpc0NhcGl0YWxMZXR0ZXIocHJvcGVydHlOYW1lW2kgLSAxXSk7XG4gICAgICAgICAgaWYgKHByZXZJc0NhcCkge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSArPSBcIl9cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlTmFtZSArPSBjaDtcbiAgICAgICAgaWYgKGlzTG93IHx8IGlzRGlnKSB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSArPSBcIl9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0NhcCB8fCBpc0xvdyB8fCBpc0RpZykge1xuICAgICAgYXR0cmlidXRlTmFtZSArPSBjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlTmFtZSArPSBcIl9cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNDYXBpdGFsTGV0dGVyKGNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoID49IFwiQVwiICYmIGNoIDw9IFwiWlwiO1xufVxuZnVuY3Rpb24gaXNMb3dlcmNhc2VMZXR0ZXIoY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gY2ggPj0gXCJhXCIgJiYgY2ggPD0gXCJ6XCI7XG59XG5mdW5jdGlvbiBpc051bWVyaWMoY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gY2ggPj0gXCIwXCIgJiYgY2ggPD0gXCI5XCI7XG59XG5mdW5jdGlvbiB0b0xvd2VyY2FzZUxldHRlcihjaDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNoLnRvTG93ZXJDYXNlKCk7XG59XG4iXX0=