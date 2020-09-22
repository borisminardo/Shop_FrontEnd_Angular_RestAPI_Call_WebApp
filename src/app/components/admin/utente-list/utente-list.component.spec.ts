import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteListComponent } from './utente-list.component';

describe('UtenteListComponent', () => {
  let component: UtenteListComponent;
  let fixture: ComponentFixture<UtenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
