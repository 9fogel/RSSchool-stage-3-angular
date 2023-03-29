import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../model/search-item.model';

enum FilterName {
  Date = 'date',
  Views = 'views',
}

enum FilterOrder {
  Desc = 'desc',
  Asc = 'asc',
}

@Pipe({
  name: 'sorting',
})
export default class SortingPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    searchItems: Array<ISearchItem>,
    filterName: string | undefined,
    filterOrder: string | undefined,
  ): Array<ISearchItem> {
    if (filterName === FilterName.Views) {
      return filterOrder === FilterOrder.Desc
        ? searchItems.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
        : searchItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (filterName === FilterName.Date) {
      return filterOrder === FilterOrder.Desc
        ? searchItems.sort(
            (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
          )
        : searchItems.sort(
            (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
          );
    }

    return searchItems;
  }
}
