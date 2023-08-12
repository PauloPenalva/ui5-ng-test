import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueHelpComponent } from './value-help.component';

describe('ValueHelpComponent', () => {
  let component: ValueHelpComponent;
  let fixture: ComponentFixture<ValueHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
