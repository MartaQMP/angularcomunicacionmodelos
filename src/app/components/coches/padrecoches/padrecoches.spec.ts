import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padrecoches } from './padrecoches';

describe('Padrecoches', () => {
  let component: Padrecoches;
  let fixture: ComponentFixture<Padrecoches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padrecoches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padrecoches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
