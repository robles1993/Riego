import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsSidenavComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsSidenavComponent;
  let fixture: ComponentFixture<AlertsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
