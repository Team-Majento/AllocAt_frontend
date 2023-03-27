import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseReportComponent } from './company-wise-report.component';

describe('CompanyWiseReportComponent', () => {
  let component: CompanyWiseReportComponent;
  let fixture: ComponentFixture<CompanyWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
