import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;

  constructor() {
    this.user = {
      name : 'Ravikumar Chenna',
      title : 'Application Architect',
      address : '2028 Hemingway Ln, Roswell, GA 30075',
      phone : [
          '404-824-6237',
          '404-806-6898',
          '404-543-6283'
      ]
    };
  }

  ngOnInit() {
  }

}
