import { Component, OnInit } from '@angular/core';
import { dataQuote } from '../services/data-serv.service';
import { Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-del-quotes',
  templateUrl: './del-quotes.component.html',
  styleUrls: ['./del-quotes.component.css']
})
export class DelQuotesComponent implements OnInit {

   id: any;
   private sub: any;
   private data: any;
   quotes: dataQuote[];


   constructor(private route: ActivatedRoute, private dataQuote: dataQuote, private router: Router) {}

   ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        //Get single quote by id
        this.bibSingle(this.id);


        // In a real app: dispatch action to load the details here.
     });
   }

   ngOnDestroy() {
     this.sub.unsubscribe();
   }

   bibSingle(quoteId){
     this.dataQuote.bibSingle(quoteId).subscribe(
         quotes => this.quotes = quotes, //Bind to quote
         err => {
           console.log(err);
         });

         }

         del(quoteId){
           alert ('deleting....'+quoteId);

           this.dataQuote.delete(quoteId).subscribe(
               quotes => this.quotes = quotes, //Bind to quotes
               err => {
                 console.log(err);
               });
               this.fetch();//Refresh quotes
               this.router.navigate(['/view']);
         }

         fetch (){
           this.dataQuote.fetch().subscribe(
               quotes => this.quotes = quotes, //Bind to quotes
               err => {
                 console.log(err);
               });
               }



}
