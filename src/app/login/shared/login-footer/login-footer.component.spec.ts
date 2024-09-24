import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFooterComponent } from './login-footer.component';

describe('LoginFooterComponent', () => {
  let component: LoginFooterComponent;
  let fixture: ComponentFixture<LoginFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
