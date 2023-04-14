import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationJeuComponent } from './creation-jeu.component';

describe('CreationJeuComponent', () => {
  let component: CreationJeuComponent;
  let fixture: ComponentFixture<CreationJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
