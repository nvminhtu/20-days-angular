import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComChildComponent } from './com-child.component';

describe('ComChildComponent', () => {
  let component: ComChildComponent;
  let fixture: ComponentFixture<ComChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
