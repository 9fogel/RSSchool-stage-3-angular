import { Component, OnDestroy, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  Subscription,
  Observable,
  switchMap,
} from 'rxjs';
import * as appActions from 'src/app/redux/actions/app.actions';
import { Store } from '@ngrx/store';
import { getAllVideos } from 'src/app/redux/selectors/app.selectors';
import YoutubeService from '../../services/youtube.service';
import { ISearchItem } from '../../model/search-item.model';

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

  videos$: Observable<ISearchItem[]> | undefined;

  constructor(
    public searchService: SearchService,
    public filtersService: FiltersService,
    public youtubeService: YoutubeService,
    private store: Store,
  ) {}

  applySearch(searchValue: string): void {
    this.searchFilterValue = searchValue;
  }

  applySorting(sortingInfo: Array<string>): void {
    this.sortingData = sortingInfo;
  }

  ngOnInit(): void {
    this.videos$ = this.store.select(getAllVideos);

    const DEBOUNCE_MS = 500;
    this.subscription = this.searchService.searchValue$
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(DEBOUNCE_MS),
        distinctUntilChanged(),
        switchMap((value) => this.youtubeService.getVideos(value)),
      )
      .subscribe((response) => {
        this.store.dispatch(appActions.loadVideos({ videos: response }));
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
