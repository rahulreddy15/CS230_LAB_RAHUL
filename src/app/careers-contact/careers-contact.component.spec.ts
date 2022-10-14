import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersContactComponent } from './careers-contact.component';

describe('CareersContactComponent', () => {
  let component: CareersContactComponent;
  let fixture: ComponentFixture<CareersContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
