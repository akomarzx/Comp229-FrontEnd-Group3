import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAdsCategoryButtonComponent } from './feat-ads-category-button.component';

describe('FeatAdsCategoryButtonComponent', () => {
  let component: FeatAdsCategoryButtonComponent;
  let fixture: ComponentFixture<FeatAdsCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAdsCategoryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAdsCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
