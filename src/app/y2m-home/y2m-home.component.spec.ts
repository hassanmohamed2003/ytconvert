import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Y2mHomeComponent} from './y2m-home.component';

describe('Y2mHomeComponent', () => {
  let component: Y2mHomeComponent;
  let fixture: ComponentFixture<Y2mHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Y2mHomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Y2mHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
