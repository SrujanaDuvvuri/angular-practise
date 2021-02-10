import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPractiseComponent } from './html-practise.component';

describe('HtmlPractiseComponent', () => {
  let component: HtmlPractiseComponent;
  let fixture: ComponentFixture<HtmlPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPractiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
