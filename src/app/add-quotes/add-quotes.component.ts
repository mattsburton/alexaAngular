import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { dataQuote } from '../services/data-serv.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent {

  quotes: dataQuote[];
  quoteText = new FormControl('')
  quoteAuthor = new FormControl('')
  private currentAuthor : any;
  private currentQuote : any;

  constructor(private builder: FormBuilder, private dataQuote:dataQuote) { }

  ngOnInit() {
  }

  addQuote(){

  this.dataQuote.add(this.currentAuthor, this.currentQuote ).subscribe(

                    err => {
                        // Log errors if any
                        console.log(err);
                    });

                    //  this.fetch();
  }

}
