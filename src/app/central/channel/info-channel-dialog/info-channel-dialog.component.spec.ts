import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChannelDialogComponent } from './info-channel-dialog.component';

describe('InfoChannelDialogComponent', () => {
  let component: InfoChannelDialogComponent;
  let fixture: ComponentFixture<InfoChannelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoChannelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoChannelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
