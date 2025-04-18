import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharectersListComponent } from './charecters-list.component';

describe('CharectersListComponent', () => {
  let component: CharectersListComponent;
  let fixture: ComponentFixture<CharectersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharectersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharectersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
