import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestFormComponent } from './booking-request-form.component';

describe('BookingRequestFormComponent', () => {
  let component: BookingRequestFormComponent;
  let fixture: ComponentFixture<BookingRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
