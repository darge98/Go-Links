import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'dashboard-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {

  constructor(private cdr: ChangeDetectorRef) {
  }

  toggle() {
    const isDarkMode = document.getElementsByTagName('html')[0].classList.contains('dark');

    if (isDarkMode) {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.add('dark');
    }

    this.cdr.detectChanges();
  }
}
