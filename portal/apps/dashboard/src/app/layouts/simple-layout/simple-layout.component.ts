import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './simple-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleLayoutComponent {
}
