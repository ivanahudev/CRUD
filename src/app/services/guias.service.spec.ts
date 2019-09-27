import { TestBed } from '@angular/core/testing';

import { GuiasService } from './guias.service';

describe('GuiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuiasService = TestBed.get(GuiasService);
    expect(service).toBeTruthy();
  });
});
