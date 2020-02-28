import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  nameControl = new FormControl('', []);
  emailAddressControl = new FormControl('', []);
  messageAreaControl = new FormControl('', []);

  constructor() { }

  ngOnInit() {
console.log('hello');
  }

  sendMessage(): void  {
    // TODO : Send message to API
  }

}
