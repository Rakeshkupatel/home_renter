import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLoactionComponent } from './housing-loaction.component';

describe('HousingLoactionComponent', () => {
  let component: HousingLoactionComponent;
  let fixture: ComponentFixture<HousingLoactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLoactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
