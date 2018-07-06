import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingLanguageComponent } from './programing-language.component';

describe('ProgramingLanguageComponent', () => {
  let component: ProgramingLanguageComponent;
  let fixture: ComponentFixture<ProgramingLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramingLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
