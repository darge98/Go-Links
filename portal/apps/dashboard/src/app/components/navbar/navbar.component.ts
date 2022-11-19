import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dashboard-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
