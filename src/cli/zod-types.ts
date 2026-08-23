export enum ZodTypeName {
  Optional = 'optional',
  Nullable = 'nullable',
  Default = 'default',
  Catch = 'catch',
  Readonly = 'readonly',
  Object = 'object',
  Array = 'array',
  Union = 'union',
  Enum = 'enum',
  Record = 'record',
}

export const WRAPPER_TYPES: readonly ZodTypeName[] = [
  ZodTypeName.Optional,
  ZodTypeName.Nullable,
  ZodTypeName.Default,
  ZodTypeName.Catch,
  ZodTypeName.Readonly,
];
