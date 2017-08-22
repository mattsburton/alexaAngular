import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './routes/routes';
import { AppComponent } from './app.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { AddQuotesComponent } from './add-quotes/add-quotes.component';
import { EditQuotesComponent } from './edit-quotes/edit-quotes.component';
import { DelQuotesComponent } from './del-quotes/del-quotes.component';
import { dataQuote } from './services/data-serv.service';
import { HttpModule } from '@angular/http';
import { ViewSingleComponent } from './view-single/view-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewQuotesComponent,
    AddQuotesComponent,
    EditQuotesComponent,
    DelQuotesComponent,
    ViewSingleComponent,
  ],
  imports: [
    BrowserModule, routing, HttpModule, ReactiveFormsModule
  ],
  providers: [dataQuote],
  bootstrap: [AppComponent]
})
export class AppModule { }
