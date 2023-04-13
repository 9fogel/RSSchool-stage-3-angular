import { Component, OnDestroy, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';
import { filter, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent implements OnInit, OnDestroy {
  searchFilterValue?: string;

  searchValue = '';

  sortingData = ['views', 'default'];

  private subscription?: Subscription;

  constructor(
    public searchService: SearchService,
    public filtersService: FiltersService,
    public youtubeService: YoutubeService,
  ) {}

  applySearch(searchValue: string): void {
    this.searchFilterValue = searchValue;
  }

  applySorting(sortingInfo: Array<string>): void {
    this.sortingData = sortingInfo;
  }

  ngOnInit(): void {
    const DEBOUNCE_MS = 500;

    this.subscription = this.searchService.searchValue$
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(DEBOUNCE_MS),
        distinctUntilChanged(),
      )
      .subscribe((value) => this.youtubeService.getVideos(value));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
