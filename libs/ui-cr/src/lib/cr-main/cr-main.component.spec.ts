import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrMainComponent } from './cr-main.component';

describe('CrMainComponent', () => {
  let component: CrMainComponent;
  let fixture: ComponentFixture<CrMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
