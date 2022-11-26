import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'portal-furry',
  standalone: true,
  templateUrl: './furry.component.html',
  styleUrls: ['./furry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurryComponent {
}
