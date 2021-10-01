import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/searchResult.interface';
import { DataService } from 'src/app/services/data.service';
/* import { Post } from 'src/app/services/post';*/

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  items: any = [];
  query = '';
  isLoading = false;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    /*     this.dataService.getPosts().subscribe((posts) => {
      this.post = posts;
      this.dataService.postsData = posts;
    }); */
  }
  /*   onSelectedOption(e: any) {
    this.getFilteredExpenseList();
  }*/

  getQuery(e: any) {
    this.isLoading = true;
    this.query = e;
    console.log(e);
    this.dataService.getItems(e).then((res: Item[]) => {
      this.isLoading = false;
      this.items = res;
    });

    /*  else {
      this.post = this.dataService.postsData;
    }

    console.log(this.post);
  }  */
  }
}
