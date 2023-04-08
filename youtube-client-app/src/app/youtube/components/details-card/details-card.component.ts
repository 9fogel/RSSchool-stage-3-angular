import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from '../../model/search-item.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export default class DetailsCardComponent implements OnInit {
  searchItem: ISearchItem = {} as ISearchItem;

  private id = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    // [this.searchItem] = this.youtubeService.searchItems.filter((item) => item.id === this.id);
    if (!this.searchItem) {
      this.router.navigate(['**']);
    }
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }
}
