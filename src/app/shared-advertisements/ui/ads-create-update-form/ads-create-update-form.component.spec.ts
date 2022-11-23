import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCreateUpdateFormComponent } from './ads-create-update-form.component';

describe('AdsCreateUpdateFormComponent', () => {
  let component: AdsCreateUpdateFormComponent;
  let fixture: ComponentFixture<AdsCreateUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCreateUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsCreateUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
