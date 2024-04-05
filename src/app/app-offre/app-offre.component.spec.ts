import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOffreComponent } from './app-offre.component';

describe('AppOffreComponent', () => {
  let component: AppOffreComponent;
  let fixture: ComponentFixture<AppOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
