import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { filter, takeUntil } from 'rxjs/operators'; 

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

  //productId: string;
  //active: number = 2;

  selectedItem: any;

  //logs$: BehaviorSubject<any> = new BehaviorSubject(undefined);

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

  //destroy$ = new Subject<boolean>();

  //loading$ = this.httpStatusService.loading$;

  constructor(
   // private restrictionService: RestrictionService,
    ///private roleService: ActivatedRoleService,
    //private httpStatusService: HttpStatusService,
  ) {
  }

  ngOnInit() {
    /*this.roleService.activatedProduct$
      .pipe(
        takeUntil(this.destroy$),
        filter((p) => !!p),
      )
      .subscribe((p) => this.onchangeProduct(p.id));*/
  }

  ngOnDestroy(): void {
    //this.destroy$.next();
  }

 /* onchangeProduct(e) {
    this.productId = e;
    this.handleGetBanners();
  }

  fetchItems() {
    this.items$ = this.restrictionService.getItemsDomainRules(this.productId);
  }

  handleGetBanners() {
    this.fetchItems();
  }

  handleShowEdit(item: IDomainRule) {
    this.selectedItem = item;
    this.EditPanelIsVisible = true;
  }*/

  handleDeleteClient(id: any) {
    console.log('TESTeliminar', id);
  /*  this.restrictionService.deleteItem(settingId).subscribe(
      _ => this.fetchItems()
    )*/
  }

  /*handleSubmitFilter(value: any) {
    this.active = value.active;
    if (!value.bannerId) {
      this.items$ = this.restrictionService.getItemsDomainRules(this.productId);
    } else {
      this.items$ = this.restrictionService.getItemsDomainRules(value.bannerId);
    }
    this.FilterPanelIsVisible = false;
  }

  handlecleanFilters() {
    this.active = 2; //INITIAL STATE
    this.fetchItems();
    this.FilterPanelIsVisible = false;
  }
*/
  handleSubmitNewItem(data: any) {
    console.log('TESTRESPUESTA', data);
    //this.restrictionService.newItemDomainRule(data).subscribe((_) => this.fetchItems());
    this.NewPanelIsVisible = false;
  }

  handleSubmitEditItem(data: any) {
   /* this.restrictionService.editItemDomainRule(data, data.settingId).subscribe((_) => {
      this.fetchItems();
    });*/
    console.log('TESTUPDATE', data);
    this.EditPanelIsVisible = false;

  }
}
