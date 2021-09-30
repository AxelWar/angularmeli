import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  @Output() searchcriteria = new EventEmitter<String>();
  searchword: String | undefined;
  items: any;

  constructor(private dataService: DataServiceService) {}

  searchThis() {
      /* this.searchcriteria.emit(this.searchword) */
      this.dataService.getItems().then((response)=>{
        this.items = response;
      })
  }

}
