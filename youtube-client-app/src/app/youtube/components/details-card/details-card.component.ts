import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../model/search-item.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export default class DetailsCardComponent implements OnInit, OnDestroy {
  searchItem: ISearchItem = {} as ISearchItem;

  private id = '';

  private subscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.youtubeService.getStatistics(this.id).subscribe((videos) => {
      [this.searchItem] = videos;
    });

    if (!this.searchItem) {
      this.router.navigate(['**']);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }
}
