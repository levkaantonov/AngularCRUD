import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUpdateComponent } from './incident-update.component';

describe('IncidentUpdateComponent', () => {
  let component: IncidentUpdateComponent;
  let fixture: ComponentFixture<IncidentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
