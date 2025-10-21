import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingcontestComponent } from './codingcontest.component';

describe('CodingcontestComponent', () => {
  let component: CodingcontestComponent;
  let fixture: ComponentFixture<CodingcontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingcontestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
