import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtesisPage } from './protesis.page';

describe('ProtesisPage', () => {
  let component: ProtesisPage;
  let fixture: ComponentFixture<ProtesisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtesisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
