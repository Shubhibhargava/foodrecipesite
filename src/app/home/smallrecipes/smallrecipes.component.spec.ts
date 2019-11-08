import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallrecipesComponent } from './smallrecipes.component';

describe('SmallrecipesComponent', () => {
  let component: SmallrecipesComponent;
  let fixture: ComponentFixture<SmallrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
