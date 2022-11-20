import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() url = '';
  @Input() tags: string[] = [];

}
