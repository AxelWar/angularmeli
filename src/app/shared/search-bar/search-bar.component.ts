import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<string>();
  query: any = '';

  constructor(private dataService: DataService) {}
  ngOnInit() {}

  searchThis(value: string) {
    this.searchCriteria.emit(value);
  }
}
