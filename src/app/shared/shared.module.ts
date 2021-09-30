import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [CommonModule, BrowserModule, MatAutocompleteModule, ReactiveFormsModule ,MatChipsModule, FormsModule, AppRoutingModule, MatInputModule, NgbModule, BrowserAnimationsModule, MatIconModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SharedModule {}
