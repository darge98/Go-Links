import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'dashboard-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() url = '';
  @Input() tags: string[] = [];

}
