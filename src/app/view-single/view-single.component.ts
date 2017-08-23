import { Component, OnInit } from '@angular/core';
import { dataQuote } from '../services/data-serv.service';
import { Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single',
  templateUrl: './view-single.component.html',
  styleUrls: ['./view-single.component.css']
})
export class ViewSingleComponent implements OnInit {

   id: any;
   private sub: any;
   private data: any;
   quotes: dataQuote[];
   curId ='';
   curName ='';
   curQuote ='';

   constructor(private route: ActivatedRoute, private dataQuote: dataQuote) {}

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
           quotes => { this.quotes = quotes, this.curId = quotes._id, this.curName = quotes.name, this.curQuote = quotes.quote;},
         err => {
           console.log(err);
         });

         }






}
