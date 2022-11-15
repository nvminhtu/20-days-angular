import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjSchoolboardComponent } from './pj-schoolboard.component';

describe('PjSchoolboardComponent', () => {
  let component: PjSchoolboardComponent;
  let fixture: ComponentFixture<PjSchoolboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjSchoolboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjSchoolboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
