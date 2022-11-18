import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComParentComponent } from './com-parent.component';

describe('ComParentComponent', () => {
  let component: ComParentComponent;
  let fixture: ComponentFixture<ComParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
