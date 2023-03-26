import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardFormComponent } from './rate-card-form.component';

describe('RateCardFormComponent', () => {
  let component: RateCardFormComponent;
  let fixture: ComponentFixture<RateCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
