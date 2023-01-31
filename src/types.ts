export interface FieldValue {
  id: number;
  fields: Field[];
}

export interface Field {
  name: string;
  value: string;
  type: "text";
  edited?: boolean;
}
