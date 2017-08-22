import { Routes, RouterModule } from '@angular/router';
import { ViewQuotesComponent } from '../view-quotes/view-quotes.component';
import { AddQuotesComponent } from '../add-quotes/add-quotes.component';
import { EditQuotesComponent } from '../edit-quotes/edit-quotes.component';
import { DelQuotesComponent } from '../del-quotes/del-quotes.component';
import { ViewSingleComponent } from '../view-single/view-single.component';


export const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewQuotesComponent },
  { path: 'add', component: AddQuotesComponent },
  { path: 'viewsingle/:id', component: ViewSingleComponent },
  { path: 'edit/:id', component: EditQuotesComponent },
  { path: 'delete/:id', component: DelQuotesComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
