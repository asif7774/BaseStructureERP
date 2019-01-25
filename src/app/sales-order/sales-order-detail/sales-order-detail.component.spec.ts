import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDetailComponent } from './sales-order-detail.component';

describe('SalesOrderDetailComponent', () => {
  let component: SalesOrderDetailComponent;
  let fixture: ComponentFixture<SalesOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
