import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";

@Component({
    selector: 'dashboard-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [
        ThemeToggleComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
