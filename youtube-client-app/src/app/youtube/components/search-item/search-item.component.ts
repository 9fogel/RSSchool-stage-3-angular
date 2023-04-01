import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  constructor(private youtubeService: YoutubeService) {}

  @Input() searchItem: ISearchItem = {} as ISearchItem;

  redirectToDetailsPage(value: string) {
    this.youtubeService.redirectToDetailsPage(value);
  }
}
