import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragFinalComponent } from './drag-final.component';

describe('DragFinalComponent', () => {
  let component: DragFinalComponent;
  let fixture: ComponentFixture<DragFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragFinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
