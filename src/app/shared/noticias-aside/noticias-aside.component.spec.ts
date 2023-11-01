import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAsideComponent } from './noticias-aside.component';

describe('NoticiasAsideComponent', () => {
  let component: NoticiasAsideComponent;
  let fixture: ComponentFixture<NoticiasAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasAsideComponent]
    });
    fixture = TestBed.createComponent(NoticiasAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
