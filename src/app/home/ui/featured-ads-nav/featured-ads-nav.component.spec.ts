import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAdsNavComponent } from './featured-ads-nav.component';

describe('FeaturedAdsNavComponent', () => {
  let component: FeaturedAdsNavComponent;
  let fixture: ComponentFixture<FeaturedAdsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAdsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAdsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
