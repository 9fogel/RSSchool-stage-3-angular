import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  constructor(private router: Router) {}

  @Input() searchItem: ISearchItem = {} as ISearchItem;

  openDetailsPage(videoId: string): void {
    this.router.navigate(['youtube', videoId]);
  }
}
