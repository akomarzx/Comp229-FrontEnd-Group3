import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCreateUpdatePageComponent } from './ads-create-update-page.component';

describe('AdsCreateUpdatePageComponent', () => {
  let component: AdsCreateUpdatePageComponent;
  let fixture: ComponentFixture<AdsCreateUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCreateUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsCreateUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
