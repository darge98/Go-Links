import {Component} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {BehaviorSubject, catchError, debounceTime, Observable, of, switchMap, tap} from "rxjs";
import {SearchService} from "../../services/search.service";
import {CommonModule} from "@angular/common";
import {SearchRequest} from "../../entities/search/search-request";
import {SearchResponse} from "../../entities/search/search-response";
import {CardComponent} from "../../components/card/card.component";
import {FurryComponent} from "../../components/furry/furry.component";

@Component({
  standalone: true,
  imports: [
    SearchBarComponent, CardComponent, FurryComponent,
    CommonModule
  ],
  providers: [SearchService],
  templateUrl: './search.component.html',
  // styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formValue$ = new BehaviorSubject<string>('');
  error$ = new BehaviorSubject<Error | null>(null);
  loading$ = new BehaviorSubject<boolean>(false);
  searchValues$: Observable<SearchResponse[]> | undefined;

  constructor(private searchService: SearchService) {

    this.searchValues$ = this.formValue$.pipe(
      debounceTime(2000),
      tap(() => this.startRequest()),
      switchMap(value => this.searchService.search(this.createSearchRequestPayload(value))),
      tap(() => this.endRequest()),
      catchError(error => {
        this.endRequestWithError(error);
        return of([]);
      })
    )
  }

  whenValueChange(searchValue: string): void {
    this.formValue$.next(searchValue);
  }

  private startRequest() {
    this.setLoading(true);
    this.setError(null);
  }

  private endRequest() {
    this.setLoading(false);
    this.setError(null);
  }

  private endRequestWithError(error: Error | null) {
    this.setLoading(false);
    this.setError(error);
  }

  private setLoading(value: boolean) {
    this.loading$.next(value);
  }

  private setError(value: Error | null) {
    this.error$.next(value);
  }

  private createSearchRequestPayload(formValue: string): SearchRequest {
    return {
      textSearch: formValue
    };
  }
}
