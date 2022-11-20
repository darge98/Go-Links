import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {BehaviorSubject, catchError, debounceTime, Observable, of, switchMap, tap} from "rxjs";
import {SearchService} from "../../services/search.service";
import {CommonModule} from "@angular/common";
import {SearchRequest} from "../../entities/search/search-request";
import {SearchResponse} from "../../entities/search/search-response";
import {CardComponent} from "../../components/cards/card/card.component";
import {FurryComponent} from "../../components/furry/furry.component";
import {HttpErrorResponse} from "@angular/common/http";
import {AppError} from "../../entities/error/app-error";
import {SkeletonCardComponent} from "../../components/cards/skeleton-card/skeleton-card.component";

@Component({
  standalone: true,
  imports: [
    SearchBarComponent, CardComponent, FurryComponent,
    CommonModule, SkeletonCardComponent
  ],
  providers: [SearchService],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formValue$ = new BehaviorSubject<string>('');
  error$ = new BehaviorSubject<AppError | null>(null);
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

  private endRequestWithError(error: HttpErrorResponse | Error | null) {
    this.setLoading(false);
    this.setError(error);
  }

  private setLoading(value: boolean) {
    this.loading$.next(value);
  }

  private setError(value: HttpErrorResponse | Error | null) {
    this.error$.next(value !== null ? this.createError(value) : null);
  }

  private createError(error: HttpErrorResponse | Error): AppError {
    const status = (error as HttpErrorResponse)?.status || 500;
    let description;
    let courtesyMessage;

    switch (status) {
      case 404: {
        description = 'Not Found.';
        courtesyMessage = 'Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.';
        break;
      }
      default: {
        description = 'Something went wrong.';
        courtesyMessage = 'Sorry but there are some problem with your request.<br/>Please try again.';
        break;
      }
    }

    return new AppError(status, description, courtesyMessage);
  }

  private createSearchRequestPayload(formValue: string): SearchRequest {
    return {
      textSearch: formValue
    };
  }
}
