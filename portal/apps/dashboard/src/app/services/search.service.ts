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
    ).subscribe({
      next: links => this.data$.next(links),
      error: error => this.data$.error(error)
    });
  }

  search(searchValue: string): Observable<GoLink[]> {
    const term = searchValue.toLowerCase();
    return this.data$.pipe(
      take(1),
      switchMap(data =>
        from(data).pipe(
          filter(link =>
            link.name.toLowerCase().includes(term)
            || link.description.toLowerCase().includes(term)
            || (link.tags.length > 0 && link.tags.every(t => t.includes(term)))
          )
        )
      ),
      toArray()
    )
  }

  private getAllLinks(): Observable<SearchResponse> {
    return this.searchHttpService.search({textSearch: ''});
  }
}
