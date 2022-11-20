import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurryComponent } from './furry.component';

describe('FurryComponent', () => {
  let component: FurryComponent;
  let fixture: ComponentFixture<FurryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FurryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
