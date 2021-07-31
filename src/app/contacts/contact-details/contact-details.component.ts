import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {
  @Input() selectedContact: any;
  constructor() { }
  ngOnInit(): void {
    // this.selectedContact = {
    //   imgUrl: 'https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg',
    //   name: 'Teresa Lloyd',
    //   job: 'PR Agent',
    //   bio: 'When I first got into the advertising, I was looking for the magical combination that would put website into the top search engine rankings',
    //   emails: [
    //     {value: 'johanna.stevens@gmail.com', isPrimary: true},
    //     {value: 'johanna.stevens@whiteui.store', isPrimary: false}
    //   ],
    //   dial: 'j.stevens@ymsg.com',
    //   meeting: 'http://go.betacall.com/meet/j.stevens',
    //   phoneNumbers: [
    //     {value: '439-582-1578', isPrimary: true},
    //     {value: '621-770-7689', isPrimary: false}
    //   ]
    // }
  }

}
