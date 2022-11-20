import {Injectable} from '@angular/core';
import {SearchHttpService} from "./search.http.service";
import {SearchRequest} from "../entities/search/search-request";
import {Observable} from "rxjs";
import {SearchResponse} from "../entities/search/search-response";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private searchHttpService: SearchHttpService) {

  }

  search(request: SearchRequest): Observable<SearchResponse[]> {
    throw new Error("not implemented");
    return this.searchHttpService.search(request);
  }
}
