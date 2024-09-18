import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartViewComponent } from './start-view.component';

describe('StartViewComponent', () => {
  let component: StartViewComponent;
  let fixture: ComponentFixture<StartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
