import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisEscolhasComponent } from './principais-escolhas.component';

describe('PrincipaisEscolhasComponent', () => {
  let component: PrincipaisEscolhasComponent;
  let fixture: ComponentFixture<PrincipaisEscolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaisEscolhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisEscolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
