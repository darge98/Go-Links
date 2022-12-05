export interface SearchResponse {
  items: GoLink[];
  totalItem: number;
}

export interface GoLink {
  id: string;
  name: string;
  description: string;
  redirectUrl: string;
  tags: Array<string>;
}
