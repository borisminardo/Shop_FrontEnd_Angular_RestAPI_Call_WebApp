import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteFormComponent } from './utente-form.component';

describe('UtenteFormComponent', () => {
  let component: UtenteFormComponent;
  let fixture: ComponentFixture<UtenteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
