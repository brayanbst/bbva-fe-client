import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IField } from 'src/pages/interfaces/field.interface';
import { newPanelFields } from './new-client-fields';
import { NewPanelPresenter } from './new-client.presenter';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css'],
  providers: [ NewPanelPresenter ]
})
export class NewClientComponent implements OnInit {
  @Output() onHide: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() isVisible: boolean = false;

  fields: IField [] = newPanelFields;

  constructor(
    public presenter: NewPanelPresenter
    ) {
    }

  submit() {
    this.onSubmit.emit(this.presenter.form.value);
  }

  ngOnInit() {
  }
}