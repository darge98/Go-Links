import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dashboard-furry',
  standalone: true,
  templateUrl: './furry.component.html',
  styleUrls: ['./furry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurryComponent {

}
