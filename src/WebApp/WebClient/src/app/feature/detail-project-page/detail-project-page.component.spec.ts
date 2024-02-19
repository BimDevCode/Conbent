import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjectPageComponent } from './detail-project-page.component';

describe('DetailProjectPageComponent', () => {
  let component: DetailProjectPageComponent;
  let fixture: ComponentFixture<DetailProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
