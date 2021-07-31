import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.sass']
})
export class ContactsListComponent implements OnInit {
  contactsList: Array<any>;
  contactsListBackup: Array<any>;
  searchContactText = '';
  selectedContact: any = null;
  selectedContactId: number | string | null = null;
  constructor(private contactsService: ContactsServiceService) { 
  }

  searchKeyStrokeEvent(arg: any, event: any) {
    this.contactsList = this.contactsListBackup.filter(x => x.name.toLowerCase().includes(arg?.value?.toLowerCase()))
  }

  contactSelected(id: number | string) {
    this.selectedContactId = id;
    this.fetchContactDetails(id);
  }

  fetchContactsList() {
    this.contactsList = this.contactsService.getContactsList();
    this.contactsListBackup = [...this.contactsList];
  }

  fetchContactDetails(id: number | string) {
    //call backend service to fetch contact details by passing contact id
    this.selectedContact = this.contactsService.getContactDetails(id);
  }

  ngOnInit(): void {
    this.fetchContactsList();
  }

}
