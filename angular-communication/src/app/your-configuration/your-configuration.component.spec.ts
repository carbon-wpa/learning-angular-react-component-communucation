import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourConfigurationComponent } from './your-configuration.component';

describe('YourConfigurationComponent', () => {
  let component: YourConfigurationComponent;
  let fixture: ComponentFixture<YourConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
