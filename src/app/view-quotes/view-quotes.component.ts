import { Component, OnInit } from '@angular/core';
import { dataQuote } from '../services/data-serv.service';
import { Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent implements OnInit {

  private data: any;
  quotes: dataQuote[];

  constructor(private dataQuote: dataQuote) {  }

  ngOnInit() {
    this.fetch();
  }

  fetch (){
    this.dataQuote.fetch().subscribe(
        quotes => this.quotes = quotes, //Bind to quotes
        err => {
          console.log(err);
        });
        }




}
