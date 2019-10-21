import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiracyComponent } from './piracy.component';

describe('PiracyComponent', () => {
  let component: PiracyComponent;
  let fixture: ComponentFixture<PiracyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiracyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
