import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchBarComponent} from "../../components/search-bar/search-bar.component";
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Component({
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchValue$ = new ReplaySubject<string>(1);
  error$ = new BehaviorSubject<boolean>(false);
  loading$ = new BehaviorSubject<boolean>(false);
  searchValues$ = new ReplaySubject<string[]>();

  ngOnInit(): void {
    return;

  }

  whenFormSubmit(searchValue: string): void {
    this.searchValue$.next(searchValue);
  }
}
