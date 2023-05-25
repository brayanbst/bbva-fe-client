import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { filter, takeUntil } from 'rxjs/operators'; 
import { ClientService } from './../pages/_shared/services/client.service'
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  NewPanelIsVisible = false;
  EditPanelIsVisible = false;
  DetailsPanelIsVisible = false;
  FilterPanelIsVisible = false;
  LogPanelIsVisible = false;

  selectedItem: any;

  items: any[] = [
    {
      "id": 1,
      "client": "John Doe",
      "age": 30
    },
    {
      "id": 2,
      "client": "Jane Smith",
      "age": 25
    },
    {
      "id": 3,
      "client": "Mike Johnson",
      "age": 40
    }
  ];


  constructor(
    private clientService: ClientService,
    private http: HttpClient, 
  ) {
  }

  ngOnInit() {
    this.fetchItems()
  }

  fetchItems() {
     this.clientService.getItems(undefined).subscribe(data =>{
      this.items = data;
    });
  }

  handleDeleteClient(id: any) {
    this.clientService.deleteItem(id).subscribe(
      _ => this.fetchItems()
    )
  }


  handleSubmitNewItem(data: any) {
    this.clientService.newItem(data).subscribe((_) => this.fetchItems());
    this.NewPanelIsVisible = false;
  }

  handleSubmitEditItem(data: any) {
    const IdClient = data.id;
    delete data.id;
   this.clientService.editItem(data, IdClient).subscribe((_) => {
      this.fetchItems();
          this.EditPanelIsVisible = false;
    });

  }
}
