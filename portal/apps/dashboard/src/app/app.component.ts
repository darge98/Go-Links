import {Component} from '@angular/core';

@Component({
  selector: 'dashboard-root',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
