import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-results',
  templateUrl: './items-results.component.html',
  styleUrls: ['./items-results.component.scss']
})
export class ItemsResultsComponent implements OnInit {
  @Input() isLoading = false;
  @Input() items: any = [];

  constructor() {}

  ngOnInit(): void {}
}
