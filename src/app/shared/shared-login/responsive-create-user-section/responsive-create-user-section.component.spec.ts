import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCreateUserSectionComponent } from './responsive-create-user-section.component';

describe('ResponsiveCreateUserSectionComponent', () => {
  let component: ResponsiveCreateUserSectionComponent;
  let fixture: ComponentFixture<ResponsiveCreateUserSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveCreateUserSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveCreateUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
