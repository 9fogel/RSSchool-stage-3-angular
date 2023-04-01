import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../../model/search-item.model';
import response from '../../../data/response.json';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export default class DetailsCardComponent implements OnInit {
  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {}

  id = this.youtubeService.videoId;

  searchItem: ISearchItem = {} as ISearchItem;

  ngOnInit(): void {
    // eslint-disable-next-line no-return-assign
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.youtubeService.videoId = this.id;
    [this.searchItem] = response.items.filter((item) => item.id === this.id);
  }

  returnToMainPage(): void {
    this.youtubeService.returnToMainPage();
  }
}
