import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component'
import {PipesComponent} from "./components/pipes/pipes.component"

const routes: Routes = [
  {path:'footer', component: FooterComponent },
  {path:'pipes', component: PipesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
