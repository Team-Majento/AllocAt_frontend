import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceRequestFormComponent } from './resource-request-form.component';

describe('ResourceRequestFormComponent', () => {
  let component: ResourceRequestFormComponent;
  let fixture: ComponentFixture<ResourceRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
