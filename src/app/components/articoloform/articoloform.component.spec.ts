import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ArticoloFormComponent} from '../articoloform/articoloform.component';

describe('ArticoloformComponent', () => {
  let component: ArticoloFormComponent;
  let fixture: ComponentFixture<ArticoloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
