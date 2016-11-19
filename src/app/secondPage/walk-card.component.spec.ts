/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WalkCardComponent } from './walk-card.component';

describe('WalkCardComponent', () => {
  let component: WalkCardComponent;
  let fixture: ComponentFixture<WalkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
