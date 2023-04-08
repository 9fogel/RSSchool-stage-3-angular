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
    // eslint-disable-next-line no-return-assign
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.youtubeService.getStatistics(this.id).subscribe((videos) => {
        [this.searchItem] = videos;
      });
    });

    if (!this.searchItem) {
      this.router.navigate(['**']);
    }
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }
}
