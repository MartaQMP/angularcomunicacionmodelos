import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijodeportes } from './hijodeportes';

describe('Hijodeportes', () => {
  let component: Hijodeportes;
  let fixture: ComponentFixture<Hijodeportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hijodeportes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijodeportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
