import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestrecipesComponent } from './bestrecipes.component';

describe('BestrecipesComponent', () => {
  let component: BestrecipesComponent;
  let fixture: ComponentFixture<BestrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
