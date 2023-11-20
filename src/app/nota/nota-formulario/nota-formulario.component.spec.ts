import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaFormularioComponent } from './nota-formulario.component';

describe('NotaFormularioComponent', () => {
  let component: NotaFormularioComponent;
  let fixture: ComponentFixture<NotaFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaFormularioComponent]
    });
    fixture = TestBed.createComponent(NotaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
