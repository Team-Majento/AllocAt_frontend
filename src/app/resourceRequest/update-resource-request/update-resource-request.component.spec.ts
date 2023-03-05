import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResourceRequestComponent } from './update-resource-request.component';

describe('UpdateResourceRequestComponent', () => {
  let component: UpdateResourceRequestComponent;
  let fixture: ComponentFixture<UpdateResourceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResourceRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
