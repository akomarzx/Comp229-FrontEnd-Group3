import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsShowPageComponent } from './ads-show-page.component';

describe('AdsShowPageComponent', () => {
  let component: AdsShowPageComponent;
  let fixture: ComponentFixture<AdsShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
