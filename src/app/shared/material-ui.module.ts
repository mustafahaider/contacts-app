import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSidenavModule

  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTableModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class MaterialUIModule { }
