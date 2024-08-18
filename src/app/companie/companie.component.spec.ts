import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanieComponent } from './companie.component';

describe('CompanieComponent', () => {
  let component: CompanieComponent;
  let fixture: ComponentFixture<CompanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanieComponent]
    });
    fixture = TestBed.createComponent(CompanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
