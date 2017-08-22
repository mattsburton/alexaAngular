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
  selector: 'app-edit-quotes',
  templateUrl: './edit-quotes.component.html',
  styleUrls: ['./edit-quotes.component.css']
})
export class EditQuotesComponent  {
  id: any;
  quotes: dataQuote[];
  private sub: any;
  private data: any;
  private currentAuthor = "initial value";
  private currentQuote = "initial Quote";
  quoteText = new FormControl('')
  quoteAuthor = new FormControl('')
  updtaTeForm: FormGroup = this.builder.group({
      quoteText: this.quoteText,
      quoteAuthor: this.quoteAuthor,

});

  constructor(private builder: FormBuilder, private dataQuote:dataQuote, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       //Get single quote by id
       this.bibSingle(this.id);


       // In a real app: dispatch action to load the details here.
    });
  }


  bibSingle(quoteId){
    this.dataQuote.bibSingle(quoteId).subscribe(

        quotes => { this.quotes = quotes, this.currentAuthor = quotes.name, this.currentQuote = quotes.quote;},

         //Bind to quotes
        err => {
          console.log(err);
        });
  }




  updateQuote(){

  this.dataQuote.updateBib(this.id, this.currentAuthor, this.currentQuote ).subscribe(

                    err => {
                        // Log errors if any
                        console.log(err);
                    });

                    //  this.fetch();
  }


}
