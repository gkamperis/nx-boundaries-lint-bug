import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArMainComponent } from './ar-main.component';

describe('ArMainComponent', () => {
  let component: ArMainComponent;
  let fixture: ComponentFixture<ArMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
