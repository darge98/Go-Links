import {Injectable} from '@angular/core';
import {SearchHttpService} from "./search.http.service";
import {filter, from, map, Observable, ReplaySubject, switchMap, take, toArray} from "rxjs";
import {GoLink, SearchResponse} from "../entities/search/search-response";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private data$ = new ReplaySubject<GoLink[]>(1);

  constructor(private searchHttpService: SearchHttpService) {
    this.getAllLinks().pipe(
      map(res => res.items),
      take(1)
    ).subscribe(links => this.data$.next(links));
  }

  search(searchValue: string): Observable<GoLink[]> {
    return this.data$.pipe(
      take(1),
      switchMap(data =>
        from(data).pipe(
          filter(link =>
            link.name.includes(searchValue)
            || link.description.includes(searchValue)
            || link.tags.every(t => t.includes(searchValue)))
        )
      ),
      toArray()
    )
  }

  private getAllLinks(): Observable<SearchResponse> {
    return this.searchHttpService.search({textSearch: ''});
  }
}
