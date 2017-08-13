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
    this.monthOptions = moment.monthsShort().map((m, i) => {
      const n = ('0' + (i + 1)).slice(-2);
      return Object.assign({value: n, label: n + ' - ' + m});
    });
    let year = +moment().format('YYYY');
    this.yearOptions = Array.from(Array(12).keys()).map(e => Object.assign({value: ++year, label: year}));
  }

  onSubmit() {
    console.log(this.appForm.value);
  }

}
