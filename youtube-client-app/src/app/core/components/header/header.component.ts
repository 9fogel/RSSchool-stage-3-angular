import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SearchService from '../../services/youtube.service';
import FiltersService from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  searchValue = '';

  constructor(
    private router: Router,
    private searchService: SearchService,
    private filtersService: FiltersService,
  ) {}

  openFilters(): void {
    this.filtersService.openFilters();
  }

  redirectToMainPage(): void {
    this.router.navigateByUrl('/youtube');
  }

  submitSearchRequest(value: string): void {
    this.searchService.submitSearchRequest(value);
  }
}
