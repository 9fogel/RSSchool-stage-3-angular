import { Component, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';
import { debounceTime } from 'rxjs';
import YoutubeService from '../../services/youtube.service';
import { ISearchItem } from '../../model/search-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent implements OnInit {
  searchFilterValue?: string;

  searchValue = '';

  sortingData = ['views', 'default'];

  videos?: Array<ISearchItem>;

  constructor(
    public searchService: SearchService,
    public filtersService: FiltersService,
    private youtubeService: YoutubeService,
  ) {}

  applySearch(searchValue: string): void {
    this.searchFilterValue = searchValue;
  }

  applySorting(sortingInfo: Array<string>): void {
    this.sortingData = sortingInfo;
  }

  ngOnInit(): void {
    this.searchService.searchValue$.pipe(debounceTime(500)).subscribe((value) => {
      if (value.length >= 3) {
        this.searchValue = value;
        this.youtubeService.getVideos(this.searchValue).subscribe((response) => {
          this.youtubeService.getStatistics(response).subscribe((videos) => {
            console.log(videos);
            this.videos = videos;
          });
        });
      } else {
        this.searchValue = '';
      }
    });
  }
}
