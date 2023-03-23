import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingRequestListComponent } from './view-booking-request-list.component';

describe('ViewBookingRequestListComponent', () => {
  let component: ViewBookingRequestListComponent;
  let fixture: ComponentFixture<ViewBookingRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookingRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
