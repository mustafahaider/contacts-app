import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  //Assuming the contact details are like this in the DB.
  contactDetails = [
    {id: 1, name: 'Mustafa Haider', imgUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQEHIseZZ9IETg/profile-displayphoto-shrink_400_400/0/1551892382540?e=1632960000&v=beta&t=-np7QZfa_hMc3PVadvsKvRIWUtpPBkAq_SPy7Gr4ztE', job: 'Developer', isOnline: true,
    bio: 'I\'m working as a software engineer for 5 years.', emails: [{value: 'mustafa.haider@abc.com', isPrimary: true}],
    dial: 'mustafa.abc@yahoo.com', meeting: 'http://go.betacall.com/meet/m.haider', phoneNumbers: [{value: '333-333-5555', isPrimary: true}] },

    {id: 2, name: 'Johanna Stevens', imgUrl: null, job: 'Project Manager',
    bio: 'Working at different firms as a Project Manager for 10 years.', emails: [{value: 'mustafa.haider@abc.com', isPrimary: true}],
    dial: 'mustafa.abc@yahoo.com', meeting: 'http://go.betacall.com/meet/j.stevens', phoneNumbers: [{value: '111-222-4444', isPrimary: true}] },

    {id: 3, name: 'Marvin Lambert', imgUrl: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png', job: 'Designer', isOnline: true,
    bio: 'Currently looking for a job.', emails: [{value: 'marvin.lambart@abc.com', isPrimary: true}],
    dial: 'mustafa.abc@yahoo.com', meeting: 'http://go.betacall.com/meet/m.lambart', phoneNumbers: [{value: '123-456-7890', isPrimary: true}] },

    {id: 4, name: 'Teresa Lloyd', imgUrl: 'https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg', job: 'PR Agent', isOnline: false,
    bio: 'When I first got into the advertising, I was looking for the magical combination that would put website into the top search engine rankings', emails: [{value: 'johanna.stevens@gmail.com', isPrimary: true}, {value: 'johanna.stevens@whiteui.store', isPrimary: false}],
    dial: 'j.stevens@ymsg.com', meeting: 'http://go.betacall.com/meet/j.stevens', phoneNumbers: [{value: '439-582-1578', isPrimary: true}, {value: '621-770-7689', isPrimary: false}] },
    {id: 5, name: 'Fred Haynes', imgUrl: 'http://www.rottmair.de/profiles/Sebastian_Rottmair.jpg', job: 'Support Team', isOnline: true,
    bio: 'Nothing to share', emails: [{value: 'marvin.lambart@abc.com', isPrimary: true}],
    dial: 'mustafa.abc@yahoo.com', meeting: 'http://go.betacall.com/meet/m.haynes', phoneNumbers: [{value: '000-111-2222', isPrimary: true}]},

    {id: 6, name: 'Rose Peters', imgUrl: '', job: 'Project Manager', isOnline: false,
    bio: '', emails: [],
    dial: 'rose.peters@yahoo.com', meeting: 'http://go.betacall.com/meet/m.haider', phoneNumbers: [{value: '111-121-8888', isPrimary: true}]},

    {id: 7, name: 'Hettie Richardson', imgUrl: '', job: 'Developer', isOnline: false,
    bio: '', emails: [{value: 'hettie.richardson@abc.com', isPrimary: true}],
    dial: 'hettie.abc@yahoo.com', phoneNumbers: []}
  ]

  constructor() { }

  getContactsList() {
    return [
      {id: 1, name: 'Mustafa Haider', imgUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQEHIseZZ9IETg/profile-displayphoto-shrink_400_400/0/1551892382540?e=1632960000&v=beta&t=-np7QZfa_hMc3PVadvsKvRIWUtpPBkAq_SPy7Gr4ztE', job: 'Developer', isOnline: true},
      {id: 2, name: 'Johanna Stevens', imgUrl: null, job: 'Project Manager'},
      {id: 3, name: 'Marvin Lambert', imgUrl: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png', job: 'Designer', isOnline: true},
      {id: 4, name: 'Teresa Lloyd', imgUrl: 'https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg', job: 'PR Agent', isOnline: false},
      {id: 5, name: 'Fred Haynes', imgUrl: 'http://www.rottmair.de/profiles/Sebastian_Rottmair.jpg', job: 'Support Team', isOnline: true},
      {id: 6, name: 'Rose Peters', imgUrl: '', job: 'Project Manager', isOnline: false},
      {id: 7, name: 'Hettie Richardson', imgUrl: '', job: 'Developer', isOnline: false}
    ];
  }
  
  getContactDetails(id: number | string) {
    return this.contactDetails.filter(x => x.id == id)[0];
  }


}
