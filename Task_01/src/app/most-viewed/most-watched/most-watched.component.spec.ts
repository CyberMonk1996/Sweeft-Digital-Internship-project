import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWatchedComponent } from './most-watched.component';

describe('MostWatchedComponent', () => {
  let component: MostWatchedComponent;
  let fixture: ComponentFixture<MostWatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostWatchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
