import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemsResultsComponent } from './items-results/items-results.component';



@NgModule({
  declarations: [HomePageComponent, ItemPageComponent, ItemsResultsComponent],
  imports: [
    CommonModule, SharedModule, HomePageRoutingModule  ],
})
export class HomePageModule { }
