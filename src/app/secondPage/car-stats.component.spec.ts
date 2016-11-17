/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompStatsComponent } from './comp-stats.component';

describe('CompStatsComponent', () => {
  let component: CompStatsComponent;
  let fixture: ComponentFixture<CompStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
