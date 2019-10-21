import { async, TestBed } from '@angular/core/testing';
import { PrivacyModule } from './privacy.module';

describe('PrivacyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrivacyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PrivacyModule).toBeDefined();
  });
});
