import { ValidatorFn } from "@angular/forms";
import { Observable } from 'rxjs';

// Para campos de formularios
export interface IField {
  key: string;
  type?: string;
  options?: IOption[];
  asyncOptions?: Observable<IOption[]>;
  asyncOptionsKey?: string;
  label: string;
  placeholder?: string;
  default?: string | number;
  validators?: ValidatorFn[];
  pattern?: RegExp;
  optionLabel?: string;
  optionValue?: string;
  disabled?: boolean;
}

export interface IOption {
  value: string | number;
  label: string;
}