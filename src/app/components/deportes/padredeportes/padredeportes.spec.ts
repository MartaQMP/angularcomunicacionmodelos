import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padredeportes } from './padredeportes';

describe('Padredeportes', () => {
  let component: Padredeportes;
  let fixture: ComponentFixture<Padredeportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padredeportes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padredeportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
