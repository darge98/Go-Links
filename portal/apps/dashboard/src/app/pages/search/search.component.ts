import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {SearchService} from "../../services/search.service";
import {AsyncPipe, NgFor, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {SearchRequest} from "../../entities/search/search-request";
import {SearchResponse} from "../../entities/search/search-response";
import {CardComponent} from "../../components/card/card.component";

@Component({
  standalone: true,
  imports: [
    SearchBarComponent, CardComponent,
    AsyncPipe, NgIf, NgFor, NgTemplateOutlet, NgForOf
  ],
  providers: [SearchService],
  templateUrl: './search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formValue$ = new BehaviorSubject<string>('');
  error$ = new BehaviorSubject<boolean>(false);
  loading$ = new BehaviorSubject<boolean>(false);
  searchValues$: Observable<SearchResponse[]> | undefined;

  constructor(private searchService: SearchService) {

    this.searchValues$ = this.formValue$.pipe(
      tap(() => this.startRequest()),
      switchMap(value => this.searchService.search(this.createSearchRequestPayload(value))),
      tap({
        next: () => this.endRequest(),
        error: () => this.endRequestWithError()
      })
    )
  }

  whenValueChange(searchValue: string): void {
    this.formValue$.next(searchValue);
  }

  private startRequest() {
    this.setLoading(true);
    this.setError(false);
  }

  private endRequest() {
    this.setLoading(false);
    this.setError(false);
  }

  private endRequestWithError() {
    this.setLoading(false);
    this.setError(true);
  }

  private setLoading(value: boolean) {
    this.loading$.next(value);
  }

  private setError(value: boolean) {
    this.error$.next(value);
  }

  private createSearchRequestPayload(formValue: string): SearchRequest {
    return {
      textSearch: formValue
    };
  }
}
