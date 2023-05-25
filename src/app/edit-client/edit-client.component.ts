import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewPanelPresenter } from './edit-client.presenter';
//import { RestrictionService } from '../../_shared/services/restriction.service';
import { IField } from 'src/pages/interfaces/field.interface';
import { newPanelFields } from './edit-client-fields';

@Component({
  selector: 'app-edit-client',
  templateUrl: 'edit-client.component.html',
  providers: [NewPanelPresenter],
  styleUrls: ['edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  @Output() onHide: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() isVisible: boolean = false;

  fields: IField[] = newPanelFields;

  public originalData: any;

  @Input() set item(item: any) {
    if (item) {
      console.log('entradaedit', item);
      this.presenter.form.patchValue(item)
    } else return;
  }

  constructor(
    public presenter: NewPanelPresenter) {}

  ngOnInit() {}

  clean() {
    this.presenter.form.patchValue(this.originalData);
  }

  emitEditFields(event: any) {
    this.onSubmit.emit(event);
  }

}