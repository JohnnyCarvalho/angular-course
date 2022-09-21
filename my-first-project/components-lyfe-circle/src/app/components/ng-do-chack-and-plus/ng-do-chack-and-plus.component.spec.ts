import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoChackAndPlusComponent } from './ng-do-chack-and-plus.component';

describe('NgDoChackAndPlusComponent', () => {
  let component: NgDoChackAndPlusComponent;
  let fixture: ComponentFixture<NgDoChackAndPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDoChackAndPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDoChackAndPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
