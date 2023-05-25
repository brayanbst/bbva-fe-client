import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    TriStateCheckboxModule,
    CardModule,
    TooltipModule,
    RippleModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ToggleButtonModule,
    ChipModule,
    DialogModule,
    DividerModule,
    BadgeModule,
    HttpClientModule,
  ],
  providers: [ConfirmationService],
})
export class PrimeNgModule {}