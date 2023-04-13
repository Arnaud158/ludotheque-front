import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJeuComponent } from './details-jeu.component';

describe('DetailsJeuComponent', () => {
  let component: DetailsJeuComponent;
  let fixture: ComponentFixture<DetailsJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
