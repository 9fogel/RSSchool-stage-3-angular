import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SearchService from '../../services/search.service';
import FiltersService from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    public router: Router,
    private searchService: SearchService,
    private filtersService: FiltersService,
  ) {}

  searchValue?: string;

  openFilters(): void {
    this.filtersService.openFilters();
  }

  redirectToMainPage() {
    this.router.navigateByUrl('/youtube');
  }

  submitSearchRequest(value: string | undefined) {
    this.searchService.submitSearchRequest(value);
  }
}
