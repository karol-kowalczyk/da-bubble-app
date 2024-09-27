import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNewPasswordComponent } from './choose-new-password.component';

describe('ChooseNewPasswordComponent', () => {
  let component: ChooseNewPasswordComponent;
  let fixture: ComponentFixture<ChooseNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNewPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
