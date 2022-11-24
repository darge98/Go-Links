export interface SearchResponse {
  items: Item[];
  totalItem: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  redirectUrl: string;
  tags: Array<string>;
}
