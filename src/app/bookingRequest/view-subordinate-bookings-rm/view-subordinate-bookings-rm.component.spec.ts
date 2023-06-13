import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubordinateBookingsRmComponent } from './view-subordinate-bookings-rm.component';

describe('ViewSubordinateBookingsRmComponent', () => {
  let component: ViewSubordinateBookingsRmComponent;
  let fixture: ComponentFixture<ViewSubordinateBookingsRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubordinateBookingsRmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubordinateBookingsRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
