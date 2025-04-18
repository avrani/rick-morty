import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterDetailPageComponent } from './charecter-detail-page.component';

describe('CharecterDetailPageComponent', () => {
  let component: CharecterDetailPageComponent;
  let fixture: ComponentFixture<CharecterDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharecterDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharecterDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
