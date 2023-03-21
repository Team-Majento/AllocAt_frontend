import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingRequestComponent } from './add-booking-request.component';

describe('AddBookingRequestComponent', () => {
  let component: AddBookingRequestComponent;
  let fixture: ComponentFixture<AddBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
