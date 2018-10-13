import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message = 'hello';
  dateMessage = '';
  today = new Date().toDateString();
  someNumber = 20;
  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
  }
  ngOnInit() {
  }
  addTwoNumbers (a: number, b: number) {
    return a + b;
  }
  addThreeNumbers (a: number, b: number, c: number) {
    return this.addTwoNumbers(a, b) + c;
  }
}
