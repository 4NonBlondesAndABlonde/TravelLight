/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocInputComponent } from './loc-input.component';

describe('LocInputComponent', () => {
  let component: LocInputComponent;
  let fixture: ComponentFixture<LocInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
