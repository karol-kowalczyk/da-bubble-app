import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChannelDialogComponent } from './users-channel-dialog.component';

describe('UsersChannelDialogComponent', () => {
  let component: UsersChannelDialogComponent;
  let fixture: ComponentFixture<UsersChannelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersChannelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersChannelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
