export var ZodTypeName;
(function (ZodTypeName) {
    ZodTypeName["Optional"] = "optional";
    ZodTypeName["Nullable"] = "nullable";
    ZodTypeName["Default"] = "default";
    ZodTypeName["Catch"] = "catch";
    ZodTypeName["Readonly"] = "readonly";
    ZodTypeName["Object"] = "object";
    ZodTypeName["Array"] = "array";
    ZodTypeName["Union"] = "union";
    ZodTypeName["Enum"] = "enum";
    ZodTypeName["Record"] = "record";
})(ZodTypeName || (ZodTypeName = {}));
export const WRAPPER_TYPES = [
    ZodTypeName.Optional,
    ZodTypeName.Nullable,
    ZodTypeName.Default,
    ZodTypeName.Catch,
    ZodTypeName.Readonly,
];
