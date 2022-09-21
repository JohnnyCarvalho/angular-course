import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChancesComponent } from './ng-on-chances.component';

describe('NgOnChancesComponent', () => {
  let component: NgOnChancesComponent;
  let fixture: ComponentFixture<NgOnChancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
