import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPageComponent } from './containers';

const routes: Routes = [{
  path: '',
  component: BooksPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
