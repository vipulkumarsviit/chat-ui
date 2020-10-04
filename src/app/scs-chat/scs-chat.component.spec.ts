import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsChatComponent } from './scs-chat.component';

describe('ScsChatComponent', () => {
  let component: ScsChatComponent;
  let fixture: ComponentFixture<ScsChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
