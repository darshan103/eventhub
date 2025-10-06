import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventhubComponent } from './eventhub.component';

describe('EventhubComponent', () => {
  let component: EventhubComponent;
  let fixture: ComponentFixture<EventhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventhubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
