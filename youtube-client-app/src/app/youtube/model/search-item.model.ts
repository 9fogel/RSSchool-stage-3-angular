export interface ISearchItem {
  map(arg0: (item: any) => any): void;
  kind: string;
  etag: string;
  id: TId;
  snippet: TSnippet;
  statistics: TStatistics;
}

type TId = {
  kind: string;
  videoId: string;
};

type TSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: TThumbnails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: TLocalized;
  defaultAudioLanguage: string;
};

type TThumbnails = {
  default: TThumbnailsDetails;
  medium: TThumbnailsDetails;
  high: TThumbnailsDetails;
  standard: TThumbnailsDetails;
  maxres: TThumbnailsDetails;
};

type TThumbnailsDetails = {
  url: string;
  width: number;
  height: number;
};

type TLocalized = {
  title: string;
  description: string;
};

export type TStatistics = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};
