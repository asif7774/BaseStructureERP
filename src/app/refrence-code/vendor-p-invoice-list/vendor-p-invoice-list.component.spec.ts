import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPInvoiceListComponent } from './vendor-p-invoice-list.component';

describe('VendorPInvoiceListComponent', () => {
  let component: VendorPInvoiceListComponent;
  let fixture: ComponentFixture<VendorPInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
