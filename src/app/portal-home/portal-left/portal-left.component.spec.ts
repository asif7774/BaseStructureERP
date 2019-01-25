import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalLeftComponent } from './portal-left.component';

describe('PortalLeftComponent', () => {
  let component: PortalLeftComponent;
  let fixture: ComponentFixture<PortalLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
