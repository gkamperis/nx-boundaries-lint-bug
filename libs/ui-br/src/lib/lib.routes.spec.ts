import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { UiCrModule } from '@deps/ui-cr/*';
import { uiBrRoutes } from './lib.routes';

describe('Routing test', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(uiBrRoutes)],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should load specific module', () => {
    const r = router.config.find((r) => r.path === 'c');
    if (r?.loadChildren) {
      expect(r.loadChildren()).toEqual(UiCrModule);
    }
  });
});
