import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild
} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'portal-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {

  @Output() whenValueChange = new EventEmitter<string>();
  @ViewChild('searchBarInput') searchBarInput: ElementRef | undefined;

  @HostListener('document:keydown.control.k', ['$event']) onCtrlK(event: KeyboardEvent) {
    event.preventDefault();
    this.searchBarInput?.nativeElement.focus();
  }

  valueChange(value: string): void {
    this.whenValueChange.emit(value);
  }
}
