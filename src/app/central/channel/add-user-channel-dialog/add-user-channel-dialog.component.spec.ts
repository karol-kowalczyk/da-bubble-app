import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserChannelDialogComponent } from './add-user-channel-dialog.component';

describe('AddUserChannelDialogComponent', () => {
  let component: AddUserChannelDialogComponent;
  let fixture: ComponentFixture<AddUserChannelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserChannelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserChannelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
