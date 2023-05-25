import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-items',
  templateUrl: './tablem-items.component.html',
  styleUrls: ['./tablem-items.component.css']
})
export class TableItemsComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onShowDetails: EventEmitter<any> = new EventEmitter<any>();
  @Output() onShowEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onActivateItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeactivateItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  selectedItem: any;

  getActions() {
    return [
      {label: this.translateService.instant("games.assets.table.column.actions.edit")    , icon: 'pi pi-pencil' , command: () => this.onShowEdit.emit(this.selectedItem)},
      {label: this.translateService.instant("games.assets.table.column.actions.details") , icon: 'pi pi-info'   , command: () => this.onShowDetails.emit(this.selectedItem)},
      ]
  }

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}
}