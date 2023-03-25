import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() searchItem?: ISearchItem;

  date: string | undefined;

  imageWidth = 223;

  ngOnInit() {
    this.date = this.searchItem?.snippet?.publishedAt;
  }
}
