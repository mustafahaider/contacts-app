import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUIModule } from '../shared/material-ui.module';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    SharedModule,
    MaterialUIModule
    
  ]
})
export class ContactsModule { }
