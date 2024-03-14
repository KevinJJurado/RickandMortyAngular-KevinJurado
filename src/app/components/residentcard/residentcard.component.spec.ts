import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentcardComponent } from './residentcard.component';

describe('ResidentcardComponent', () => {
  let component: ResidentcardComponent;
  let fixture: ComponentFixture<ResidentcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentcardComponent]
    });
    fixture = TestBed.createComponent(ResidentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
