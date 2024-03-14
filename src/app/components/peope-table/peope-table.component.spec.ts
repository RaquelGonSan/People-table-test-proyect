import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopeTableComponent } from './peope-table.component';

describe('PeopeTableComponent', () => {
  let component: PeopeTableComponent;
  let fixture: ComponentFixture<PeopeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PeopeTableComponent]
    });
    fixture = TestBed.createComponent(PeopeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
