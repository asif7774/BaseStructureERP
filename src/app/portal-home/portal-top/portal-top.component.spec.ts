import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTopComponent } from './portal-top.component';

describe('PortalTopComponent', () => {
  let component: PortalTopComponent;
  let fixture: ComponentFixture<PortalTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
