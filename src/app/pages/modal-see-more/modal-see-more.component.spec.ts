import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeeMoreComponent } from './modal-see-more.component';

describe('ModalSeeMoreComponent', () => {
  let component: ModalSeeMoreComponent;
  let fixture: ComponentFixture<ModalSeeMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSeeMoreComponent]
    });
    fixture = TestBed.createComponent(ModalSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
