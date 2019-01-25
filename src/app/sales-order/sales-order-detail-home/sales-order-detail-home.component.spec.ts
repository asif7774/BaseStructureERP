import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDetailHomeComponent } from './sales-order-detail-home.component';

describe('SalesOrderDetailHomeComponent', () => {
  let component: SalesOrderDetailHomeComponent;
  let fixture: ComponentFixture<SalesOrderDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
