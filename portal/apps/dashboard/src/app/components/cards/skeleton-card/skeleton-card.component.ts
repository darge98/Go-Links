import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dashboard-skeleton-card',
  standalone: true,
  templateUrl: './skeleton-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonCardComponent {

}
