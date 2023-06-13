import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestsRmComponent } from './view-requests-rm.component';

describe('ViewRequestsRmComponent', () => {
  let component: ViewRequestsRmComponent;
  let fixture: ComponentFixture<ViewRequestsRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequestsRmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRequestsRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
