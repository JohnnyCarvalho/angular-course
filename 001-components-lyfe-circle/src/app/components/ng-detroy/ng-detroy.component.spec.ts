import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDetroyComponent } from './ng-detroy.component';

describe('NgDetroyComponent', () => {
  let component: NgDetroyComponent;
  let fixture: ComponentFixture<NgDetroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDetroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDetroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
