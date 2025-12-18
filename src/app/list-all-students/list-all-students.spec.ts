import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllStudents } from './list-all-students';

describe('ListAllStudents', () => {
  let component: ListAllStudents;
  let fixture: ComponentFixture<ListAllStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
