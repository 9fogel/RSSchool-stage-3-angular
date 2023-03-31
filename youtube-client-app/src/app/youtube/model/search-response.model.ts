import { ISearchItem } from './search-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: TPageInfo;
  items: Array<ISearchItem>;
}

type TPageInfo = {
  totalResults: number;
  resultsPerPage: number;
};
