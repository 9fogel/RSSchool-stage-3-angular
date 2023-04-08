import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../model/search-item.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    searchItems: Array<ISearchItem>,
    searchFilterValue: string | undefined,
  ): Array<ISearchItem> {
    if (searchFilterValue) {
      const VALUE = searchFilterValue.toLowerCase().trim();
      const RESULT = new Set(
        searchItems.filter((item) => {
          const TITLE = item.snippet?.title.toLowerCase();
          const DESCRIPTION = item.snippet?.description.toLowerCase();
          const TAGS = item.snippet?.tags;

          return TITLE.includes(VALUE) || DESCRIPTION.includes(VALUE) || TAGS?.includes(VALUE);
        }),
      );

      return Array.from(RESULT);
    }

    return searchItems;
  }
}
