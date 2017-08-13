import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IOption } from 'ng-select';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  card;
  appForm;
  months = moment.monthsShort();
  year = +moment().format('YYYY');
  monthOptions: Array<IOption>;
  yearOptions: Array<IOption>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.appForm = this.fb.group({
      card_number: 1111111111111117,
      month: '',
      year: '',
      cvc: 123
    });
    this.monthOptions = this.months.map((m, i) => {
      const n = ('0' + (i + 1)).slice(-2);
      return Object.assign({value: n, label: n + ' - ' + m});
    });
    this.yearOptions = Array.from(Array(12).keys()).map( e => {
      const y =  this.year + e;
      return Object.assign({value: y, label: y });
    });
    console.log('today is', moment());
    console.log(this.monthOptions);
    console.log(this.yearOptions);
  }

  onSubmit() {
    console.log(this.appForm.value);
  }

}
