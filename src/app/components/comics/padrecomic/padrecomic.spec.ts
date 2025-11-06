import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padrecomic } from './padrecomic';

describe('Padrecomic', () => {
  let component: Padrecomic;
  let fixture: ComponentFixture<Padrecomic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padrecomic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padrecomic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
