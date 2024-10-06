import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProfilePictureComponent } from './choose-profile-picture.component';

describe('ChooseProfilePictureComponent', () => {
  let component: ChooseProfilePictureComponent;
  let fixture: ComponentFixture<ChooseProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseProfilePictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
