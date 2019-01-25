import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDetailAttachmentComponent } from './sales-order-detail-attachment.component';

describe('SalesOrderDetailAttachmentComponent', () => {
  let component: SalesOrderDetailAttachmentComponent;
  let fixture: ComponentFixture<SalesOrderDetailAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderDetailAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDetailAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
