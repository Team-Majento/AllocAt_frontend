import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceRequestComponent } from './add-resource-request.component';

describe('AddResourceRequestComponent', () => {
  let component: AddResourceRequestComponent;
  let fixture: ComponentFixture<AddResourceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResourceRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
