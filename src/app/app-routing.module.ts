import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbardComponent } from './dashbard/dashbard.component';


const routes: Routes = [
  {path:'landing',component:DashbardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
