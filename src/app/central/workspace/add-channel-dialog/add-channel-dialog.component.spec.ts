import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelDialogComponent } from './add-channel-dialog.component';

describe('AddChannelDialogComponent', () => {
  let component: AddChannelDialogComponent;
  let fixture: ComponentFixture<AddChannelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChannelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChannelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
