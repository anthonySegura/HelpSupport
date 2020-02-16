import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportistComponent } from './supportist.component';

describe('SupportistComponent', () => {
  let component: SupportistComponent;
  let fixture: ComponentFixture<SupportistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
