import { HttpHeaders, HttpParams } from "@angular/common/http";

// construye el objeto en el formato que necesita el fb.group
export const buildFormGroup = (fields: any[]) => {
  const reducer = (prev: any, curr: any) => {
    return { ...prev, [curr.key]: [curr.default, curr.validators] };
  };

  return fields.reduce(reducer, {});
};
