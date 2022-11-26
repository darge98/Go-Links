import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeToggleComponent} from './theme-toggle.component';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle should set dark mode at first click', () => {
    component.toggle();
    const isDarkMode = document.getElementsByTagName('html')[0].classList.contains('dark');
    expect(isDarkMode).toBeTruthy();
  })

  it('toggle should remove dark mode if already set', () => {
    document.getElementsByTagName('html')[0].classList.add('dark');
    component.toggle();
    const isDarkMode = document.getElementsByTagName('html')[0].classList.contains('dark');
    expect(isDarkMode).toBeFalsy();
  })
});
