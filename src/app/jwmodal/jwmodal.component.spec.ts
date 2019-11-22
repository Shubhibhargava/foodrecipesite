import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwmodalComponent } from './jwmodal.component';

describe('JwmodalComponent', () => {
  let component: JwmodalComponent;
  let fixture: ComponentFixture<JwmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
