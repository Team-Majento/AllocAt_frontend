import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRateCardardComponent } from './add-rate-cardard.component';

describe('AddRateCardardComponent', () => {
  let component: AddRateCardardComponent;
  let fixture: ComponentFixture<AddRateCardardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRateCardardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRateCardardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
