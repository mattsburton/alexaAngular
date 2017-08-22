import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { QuoteModel } from './quote.model';
import 'rxjs/add/operator/map'

@Injectable()
export class dataQuote {

    constructor(private http: Http) {}

  fetch(){
    return this.http.get('/api/getQuotes')
      .map(res => res.json())
  }

  updateBib(_id, name, quote){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let body = {_id : _id, name: name, quote: quote};
      return this.http.post('/api/updateBibliography', body)
          .map(res => res.json())
  }

  bibSingle(bibId){
    return this.http.get('/api/getSingle/'+bibId)
        .map(res => res.json())
  }

  delete(bibId){

    return this.http.get('/api/delete/'+bibId)
        .map(res => res.json())
  }

}
