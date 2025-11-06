import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijocomic } from './hijocomic';

describe('Hijocomic', () => {
  let component: Hijocomic;
  let fixture: ComponentFixture<Hijocomic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hijocomic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijocomic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
