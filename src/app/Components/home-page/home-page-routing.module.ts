import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      breadcrumb: 'home'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
