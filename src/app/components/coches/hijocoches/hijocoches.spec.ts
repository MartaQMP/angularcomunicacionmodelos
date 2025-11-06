import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijocoches } from './hijocoches';

describe('Hijocoches', () => {
  let component: Hijocoches;
  let fixture: ComponentFixture<Hijocoches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hijocoches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijocoches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
