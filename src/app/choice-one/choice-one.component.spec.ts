import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceOneComponent } from './choice-one.component';

describe('ChoiceOneComponent', () => {
  let component: ChoiceOneComponent;
  let fixture: ComponentFixture<ChoiceOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
