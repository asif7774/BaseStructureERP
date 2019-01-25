import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalRightComponent } from './portal-right.component';

describe('PortalRightComponent', () => {
  let component: PortalRightComponent;
  let fixture: ComponentFixture<PortalRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
