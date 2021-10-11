"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGuessingResourceMapper = void 0;
const debug_1 = require("debug");
const camel_case_1 = require("camel-case");
const es2019_1 = require("../es2019");
const debug = debug_1.default("tf-aws-adapter:mapper:debug");
const trace = debug_1.default("tf-aws-adapter:mapper:trace");
const isObject = (x) => x && typeof x === "object" && !Array.isArray(x);
const isArrayOfObjects = (x) => Array.isArray(x) && x.length > 0 && isObject(x[0]);
const autoMapObjectPropertyKeys = (obj) => es2019_1.objectFromEntries(Object.entries(obj).map(([cfnKey, nestedValue]) => {
    const res = createAutoPropertyMapping(cfnKey)(nestedValue);
    return [res.tfAttributeName, res.value];
}));
function createNamePropertyMapping(tfAttributeName) {
    return (value) => {
        // TODO: this is somewhat duplicated code – check with awscc stuff, we're doing similar things there..
        if (isObject(value)) {
            value = autoMapObjectPropertyKeys(value);
        }
        else if (isArrayOfObjects(value)) {
            value = value.map(autoMapObjectPropertyKeys);
        }
        return { tfAttributeName, value };
    };
}
function createAutoPropertyMapping(cfnPropertyName) {
    // convert name to CDKTF TypeScript name
    const tfAttributeName = camel_case_1.camelCase(cfnPropertyName);
    // TODO: maybe this can become smarter in the future :)
    return createNamePropertyMapping(tfAttributeName);
}
// TODO: detect if something has been mapped to a tfAttributeName that does not exist in the props of a resource
// -> needs validations in generated provider bindings!
function createGuessingResourceMapper(Resource, propMappings = {}) {
    const mapper = (scope, id, props) => {
        const mappedProps = {};
        // TODO: extract this prop mapping code to be able to reuse it when writing custom mappers?
        // loop over all CloudFormation properties and convert them one by one
        Object.entries(props).forEach(([cfnPropertyName, cfnValue]) => {
            // Determine how to map this prop?
            let mapping;
            switch (typeof propMappings[cfnPropertyName]) {
                case "function":
                    mapping = propMappings[cfnPropertyName];
                    trace(`using a custom mapping function for ${cfnPropertyName}`);
                    break;
                case "string":
                    mapping = createNamePropertyMapping(propMappings[cfnPropertyName]);
                    trace(`using a custom name for ${cfnPropertyName} (${propMappings[cfnPropertyName]})`);
                    break;
                default:
                    trace(`auto mapping ${cfnPropertyName}`);
                    mapping = createAutoPropertyMapping(cfnPropertyName);
            }
            // map the value
            const { tfAttributeName, value } = mapping(cfnValue);
            if (Object.keys(mappedProps).includes(tfAttributeName)) {
                throw new Error(`Conflict! ${cfnPropertyName} has been mapped to ${tfAttributeName} but there has already been a value set for that key.`);
            }
            mappedProps[tfAttributeName] = value;
            // delete to mark this as done
            // (the adapter will cautiously error for values left in props after mapping)
            delete props[cfnPropertyName];
        });
        debug(`mapped props for Resource ${Resource.name}: ${JSON.stringify(mappedProps, null, 2)}`);
        return new Resource(scope, id, mappedProps);
    };
    return mapper;
}
exports.createGuessingResourceMapper = createGuessingResourceMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFnQztBQUNoQywyQ0FBdUM7QUFLdkMsc0NBQThDO0FBRTlDLE1BQU0sS0FBSyxHQUFHLGVBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sS0FBSyxHQUFHLGVBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBRXpELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFlLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBaUIsRUFBRSxDQUNqRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVyRCxNQUFNLHlCQUF5QixHQUFHLENBQUMsR0FBVyxFQUFVLEVBQUUsQ0FDeEQsMEJBQWlCLENBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFO0lBQ2hELE1BQU0sR0FBRyxHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBRUosU0FBUyx5QkFBeUIsQ0FDaEMsZUFBdUI7SUFFdkIsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2Ysc0dBQXNHO1FBQ3RHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQzthQUFNLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM5QztRQUVELE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMseUJBQXlCLENBQ2hDLGVBQXVCO0lBRXZCLHdDQUF3QztJQUN4QyxNQUFNLGVBQWUsR0FBRyxzQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELHVEQUF1RDtJQUV2RCxPQUFPLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFZRCxnSEFBZ0g7QUFDaEgsdURBQXVEO0FBRXZELFNBQWdCLDRCQUE0QixDQUMxQyxRQUFrQixFQUNsQixlQUFpQyxFQUFFO0lBRW5DLE1BQU0sTUFBTSxHQUFzQixDQUNoQyxLQUFnQixFQUNoQixFQUFVLEVBQ1YsS0FBVSxFQUNWLEVBQUU7UUFDRixNQUFNLFdBQVcsR0FBdUMsRUFBRSxDQUFDO1FBRTNELDJGQUEyRjtRQUMzRixzRUFBc0U7UUFDdEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQzVELGtDQUFrQztZQUNsQyxJQUFJLE9BQTRCLENBQUM7WUFDakMsUUFBUSxPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDNUMsS0FBSyxVQUFVO29CQUNiLE9BQU8sR0FBRyxZQUFZLENBQUMsZUFBZSxDQUF3QixDQUFDO29CQUMvRCxLQUFLLENBQUMsdUNBQXVDLGVBQWUsRUFBRSxDQUFDLENBQUM7b0JBQ2hFLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLE9BQU8sR0FBRyx5QkFBeUIsQ0FDakMsWUFBWSxDQUFDLGVBQWUsQ0FBVyxDQUN4QyxDQUFDO29CQUNGLEtBQUssQ0FDSCwyQkFBMkIsZUFBZSxLQUFLLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUNoRixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsS0FBSyxDQUFDLGdCQUFnQixlQUFlLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxPQUFPLEdBQUcseUJBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDeEQ7WUFFRCxnQkFBZ0I7WUFDaEIsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDdEQsTUFBTSxJQUFJLEtBQUssQ0FDYixhQUFhLGVBQWUsdUJBQXVCLGVBQWUsdURBQXVELENBQzFILENBQUM7YUFDSDtZQUVELFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFckMsOEJBQThCO1lBQzlCLDZFQUE2RTtZQUM3RSxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FDSCw2QkFBNkIsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUMzRCxXQUFXLEVBQ1gsSUFBSSxFQUNKLENBQUMsQ0FDRixFQUFFLENBQ0osQ0FBQztRQUVGLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBNURELG9FQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gXCJjYW1lbC1jYXNlXCI7XG5cbmltcG9ydCB7IFJlc291cmNlTWFwcGVyIH0gZnJvbSBcIi4uL21hcHBpbmdcIjtcbmltcG9ydCB7IFRlcnJhZm9ybVJlc291cmNlIH0gZnJvbSBcImNka3RmXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgb2JqZWN0RnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vZXMyMDE5XCI7XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoXCJ0Zi1hd3MtYWRhcHRlcjptYXBwZXI6ZGVidWdcIik7XG5jb25zdCB0cmFjZSA9IGNyZWF0ZURlYnVnKFwidGYtYXdzLWFkYXB0ZXI6bWFwcGVyOnRyYWNlXCIpO1xuXG5jb25zdCBpc09iamVjdCA9ICh4OiBhbnkpOiB4IGlzIG9iamVjdCA9PlxuICB4ICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHgpO1xuY29uc3QgaXNBcnJheU9mT2JqZWN0cyA9ICh4OiBhbnkpOiB4IGlzIG9iamVjdFtdID0+XG4gIEFycmF5LmlzQXJyYXkoeCkgJiYgeC5sZW5ndGggPiAwICYmIGlzT2JqZWN0KHhbMF0pO1xuXG5jb25zdCBhdXRvTWFwT2JqZWN0UHJvcGVydHlLZXlzID0gKG9iajogb2JqZWN0KTogb2JqZWN0ID0+XG4gIG9iamVjdEZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChbY2ZuS2V5LCBuZXN0ZWRWYWx1ZV0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGNyZWF0ZUF1dG9Qcm9wZXJ0eU1hcHBpbmcoY2ZuS2V5KShuZXN0ZWRWYWx1ZSk7XG4gICAgICByZXR1cm4gW3Jlcy50ZkF0dHJpYnV0ZU5hbWUsIHJlcy52YWx1ZV07XG4gICAgfSlcbiAgKTtcblxuZnVuY3Rpb24gY3JlYXRlTmFtZVByb3BlcnR5TWFwcGluZyhcbiAgdGZBdHRyaWJ1dGVOYW1lOiBzdHJpbmdcbik6IFByb3BlcnR5TWFwcGluZ0Z1bmMge1xuICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgLy8gVE9ETzogdGhpcyBpcyBzb21ld2hhdCBkdXBsaWNhdGVkIGNvZGUg4oCTIGNoZWNrIHdpdGggYXdzY2Mgc3R1ZmYsIHdlJ3JlIGRvaW5nIHNpbWlsYXIgdGhpbmdzIHRoZXJlLi5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IGF1dG9NYXBPYmplY3RQcm9wZXJ0eUtleXModmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheU9mT2JqZWN0cyh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGF1dG9NYXBPYmplY3RQcm9wZXJ0eUtleXMpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRmQXR0cmlidXRlTmFtZSwgdmFsdWUgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXV0b1Byb3BlcnR5TWFwcGluZyhcbiAgY2ZuUHJvcGVydHlOYW1lOiBzdHJpbmdcbik6IFByb3BlcnR5TWFwcGluZ0Z1bmMge1xuICAvLyBjb252ZXJ0IG5hbWUgdG8gQ0RLVEYgVHlwZVNjcmlwdCBuYW1lXG4gIGNvbnN0IHRmQXR0cmlidXRlTmFtZSA9IGNhbWVsQ2FzZShjZm5Qcm9wZXJ0eU5hbWUpO1xuICAvLyBUT0RPOiBtYXliZSB0aGlzIGNhbiBiZWNvbWUgc21hcnRlciBpbiB0aGUgZnV0dXJlIDopXG5cbiAgcmV0dXJuIGNyZWF0ZU5hbWVQcm9wZXJ0eU1hcHBpbmcodGZBdHRyaWJ1dGVOYW1lKTtcbn1cblxudHlwZSBDbGFzczxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG50eXBlIFByb3BlcnR5TWFwcGluZ0Z1bmMgPSAodmFsdWU6IGFueSkgPT4ge1xuICB0ZkF0dHJpYnV0ZU5hbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn07XG50eXBlIFByb3BlcnR5TWFwcGluZyA9XG4gIHwgc3RyaW5nIC8vIGp1c3QgbWFwcyBvbnRvIHRoZSBhdHRyaWJ1dGUgbmFtZSBwYXNzZWQgYXMgc3RyaW5nIHdpdGhvdXQgYWRqdXN0aW5nIHRoZSB2YWx1ZVxuICB8IFByb3BlcnR5TWFwcGluZ0Z1bmM7IC8vIGR5bmFtaWNhbGx5IG1hcHMgdG8gb25lIChvciBtb3JlKSBhdHRyaWJ1dGVzLCBjYW4gYWRqdXN0IHRoZSB2YWx1ZVxudHlwZSBQcm9wZXJ0eU1hcHBpbmdzID0geyBbY2ZuUHJvcGVydHk6IHN0cmluZ106IFByb3BlcnR5TWFwcGluZyB9O1xuXG4vLyBUT0RPOiBkZXRlY3QgaWYgc29tZXRoaW5nIGhhcyBiZWVuIG1hcHBlZCB0byBhIHRmQXR0cmlidXRlTmFtZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSBwcm9wcyBvZiBhIHJlc291cmNlXG4vLyAtPiBuZWVkcyB2YWxpZGF0aW9ucyBpbiBnZW5lcmF0ZWQgcHJvdmlkZXIgYmluZGluZ3MhXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHdWVzc2luZ1Jlc291cmNlTWFwcGVyPFQgZXh0ZW5kcyBUZXJyYWZvcm1SZXNvdXJjZT4oXG4gIFJlc291cmNlOiBDbGFzczxUPixcbiAgcHJvcE1hcHBpbmdzOiBQcm9wZXJ0eU1hcHBpbmdzID0ge31cbik6IFJlc291cmNlTWFwcGVyPFQ+IHtcbiAgY29uc3QgbWFwcGVyOiBSZXNvdXJjZU1hcHBlcjxUPiA9IChcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBtYXBwZWRQcm9wczogeyBbdGZBdHRyaWJ1dGVOYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgLy8gVE9ETzogZXh0cmFjdCB0aGlzIHByb3AgbWFwcGluZyBjb2RlIHRvIGJlIGFibGUgdG8gcmV1c2UgaXQgd2hlbiB3cml0aW5nIGN1c3RvbSBtYXBwZXJzP1xuICAgIC8vIGxvb3Agb3ZlciBhbGwgQ2xvdWRGb3JtYXRpb24gcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIG9uZSBieSBvbmVcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZm9yRWFjaCgoW2NmblByb3BlcnR5TmFtZSwgY2ZuVmFsdWVdKSA9PiB7XG4gICAgICAvLyBEZXRlcm1pbmUgaG93IHRvIG1hcCB0aGlzIHByb3A/XG4gICAgICBsZXQgbWFwcGluZzogUHJvcGVydHlNYXBwaW5nRnVuYztcbiAgICAgIHN3aXRjaCAodHlwZW9mIHByb3BNYXBwaW5nc1tjZm5Qcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgIG1hcHBpbmcgPSBwcm9wTWFwcGluZ3NbY2ZuUHJvcGVydHlOYW1lXSBhcyBQcm9wZXJ0eU1hcHBpbmdGdW5jO1xuICAgICAgICAgIHRyYWNlKGB1c2luZyBhIGN1c3RvbSBtYXBwaW5nIGZ1bmN0aW9uIGZvciAke2NmblByb3BlcnR5TmFtZX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgIG1hcHBpbmcgPSBjcmVhdGVOYW1lUHJvcGVydHlNYXBwaW5nKFxuICAgICAgICAgICAgcHJvcE1hcHBpbmdzW2NmblByb3BlcnR5TmFtZV0gYXMgc3RyaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0cmFjZShcbiAgICAgICAgICAgIGB1c2luZyBhIGN1c3RvbSBuYW1lIGZvciAke2NmblByb3BlcnR5TmFtZX0gKCR7cHJvcE1hcHBpbmdzW2NmblByb3BlcnR5TmFtZV19KWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRyYWNlKGBhdXRvIG1hcHBpbmcgJHtjZm5Qcm9wZXJ0eU5hbWV9YCk7XG4gICAgICAgICAgbWFwcGluZyA9IGNyZWF0ZUF1dG9Qcm9wZXJ0eU1hcHBpbmcoY2ZuUHJvcGVydHlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gbWFwIHRoZSB2YWx1ZVxuICAgICAgY29uc3QgeyB0ZkF0dHJpYnV0ZU5hbWUsIHZhbHVlIH0gPSBtYXBwaW5nKGNmblZhbHVlKTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhtYXBwZWRQcm9wcykuaW5jbHVkZXModGZBdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvbmZsaWN0ISAke2NmblByb3BlcnR5TmFtZX0gaGFzIGJlZW4gbWFwcGVkIHRvICR7dGZBdHRyaWJ1dGVOYW1lfSBidXQgdGhlcmUgaGFzIGFscmVhZHkgYmVlbiBhIHZhbHVlIHNldCBmb3IgdGhhdCBrZXkuYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBtYXBwZWRQcm9wc1t0ZkF0dHJpYnV0ZU5hbWVdID0gdmFsdWU7XG5cbiAgICAgIC8vIGRlbGV0ZSB0byBtYXJrIHRoaXMgYXMgZG9uZVxuICAgICAgLy8gKHRoZSBhZGFwdGVyIHdpbGwgY2F1dGlvdXNseSBlcnJvciBmb3IgdmFsdWVzIGxlZnQgaW4gcHJvcHMgYWZ0ZXIgbWFwcGluZylcbiAgICAgIGRlbGV0ZSBwcm9wc1tjZm5Qcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuXG4gICAgZGVidWcoXG4gICAgICBgbWFwcGVkIHByb3BzIGZvciBSZXNvdXJjZSAke1Jlc291cmNlLm5hbWV9OiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBtYXBwZWRQcm9wcyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgMlxuICAgICAgKX1gXG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgUmVzb3VyY2Uoc2NvcGUsIGlkLCBtYXBwZWRQcm9wcyk7XG4gIH07XG4gIHJldHVybiBtYXBwZXI7XG59XG4iXX0=