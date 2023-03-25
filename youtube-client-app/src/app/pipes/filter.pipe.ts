import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../model/search-item.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    searchItems: Array<ISearchItem>,
    filterName: string | undefined,
    filterOrder: string | undefined,
  ): Array<ISearchItem> {
    if (filterName === 'views') {
      return filterOrder === 'desc'
        ? searchItems.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
        : searchItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (filterName === 'date') {
      return filterOrder === 'desc'
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
