import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, switchMap} from "rxjs";
import {SearchService} from "../../services/search.service";
import {CommonModule} from "@angular/common";
import {GoLink} from "../../entities/search/search-response";
import {HttpErrorResponse} from "@angular/common/http";
import {AppError} from "../../entities/error/app-error";
import {CardComponent, FurryComponent, SearchBarComponent} from "@portal/components";

@Component({
  standalone: true,
  imports: [
    SearchBarComponent, CardComponent, FurryComponent, CommonModule
  ],
  providers: [SearchService],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formValue$ = new BehaviorSubject<string>('');
  error$ = new BehaviorSubject<AppError | null>(null);
  searchValues$: Observable<GoLink[]> | undefined;

  constructor(private searchService: SearchService) {

    this.searchValues$ = this.formValue$.pipe(
      switchMap(value => this.searchService.search(value)),
      catchError(error => {
        this.setError(error);
        return of([]);
      })
    )
  }

  whenValueChange(searchValue: string): void {
    this.formValue$.next(searchValue);
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
}
