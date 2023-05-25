import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IField } from 'src/pages/interfaces/field.interface';
import { buildFormGroup } from 'src/pages/_shared/utils';
import { NewClientComponent } from './new-client.component';
import { newPanelFields } from './new-client-fields'
@Injectable()
export class NewPanelPresenter {
  form: FormGroup;
  fields: IField[] = newPanelFields;

  constructor(protected formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(buildFormGroup(this.fields));
  }
}