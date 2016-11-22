/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelpathComponent } from './travelpath.component';

describe('TravelpathComponent', () => {
  let component: TravelpathComponent;
  let fixture: ComponentFixture<TravelpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
