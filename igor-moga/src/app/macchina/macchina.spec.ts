import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Macchina } from './macchina';

describe('Macchina', () => {
  let component: Macchina;
  let fixture: ComponentFixture<Macchina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Macchina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Macchina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
