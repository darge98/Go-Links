import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
}
