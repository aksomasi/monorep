import { async, TestBed } from '@angular/core/testing';
import { ProductsHomeScreenModule } from './products-home-screen.module';

describe('ProductsHomeScreenModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductsHomeScreenModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductsHomeScreenModule).toBeDefined();
  });
});
