import { Validators } from '@angular/forms';
import { IField } from 'src/pages/interfaces/field.interface';

export const newPanelFields: IField[] = [
  {
    key: 'id',
    type: 'text',
    label: 'Id',
    default: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Name',
    default: '',
  },
  {
    key: 'age',
    type: 'text',
    label: 'Age',
    default: '',
  },
];