import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component'

const routes: Routes = [
	{ path: "", component: MainDisplayComponent },
	{ path: "main", component: MainDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
