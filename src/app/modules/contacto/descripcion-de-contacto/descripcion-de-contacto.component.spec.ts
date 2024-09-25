import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionDeContactoComponent } from './descripcion-de-contacto.component';

describe('DescripcionDeContactoComponent', () => {
  let component: DescripcionDeContactoComponent;
  let fixture: ComponentFixture<DescripcionDeContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionDeContactoComponent]
    });
    fixture = TestBed.createComponent(DescripcionDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
