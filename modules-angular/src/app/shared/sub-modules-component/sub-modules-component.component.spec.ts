import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModulesComponentComponent } from './sub-modules-component.component';

describe('SubModulesComponentComponent', () => {
  let component: SubModulesComponentComponent;
  let fixture: ComponentFixture<SubModulesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubModulesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubModulesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
