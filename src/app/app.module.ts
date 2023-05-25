import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableItemsComponent } from './tablem-items/tablem-items.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { FilterClientComponent } from './filter-client/filter-client.component';
import { PrimeNgModule } from 'src/prime-ng/prime-ng.module'
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    TableItemsComponent,
    NewClientComponent,
    EditClientComponent,
    FilterClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    TranslateModule.forRoot(),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
