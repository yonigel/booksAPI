import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBookListComponent } from './main-book-list.component';

describe('MainBookListComponent', () => {
  let component: MainBookListComponent;
  let fixture: ComponentFixture<MainBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
