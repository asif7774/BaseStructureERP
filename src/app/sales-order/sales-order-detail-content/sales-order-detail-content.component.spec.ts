import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDetailContentComponent } from './sales-order-detail-content.component';

describe('SalesOrderDetailContentComponent', () => {
  let component: SalesOrderDetailContentComponent;
  let fixture: ComponentFixture<SalesOrderDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
