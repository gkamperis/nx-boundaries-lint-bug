import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrMainComponent } from './br-main.component';

describe('BrMainComponent', () => {
  let component: BrMainComponent;
  let fixture: ComponentFixture<BrMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
