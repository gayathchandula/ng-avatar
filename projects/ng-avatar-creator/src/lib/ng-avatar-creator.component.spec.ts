import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAvatarCreatorComponent } from './ng-avatar-creator.component';

describe('NgAvatarCreatorComponent', () => {
  let component: NgAvatarCreatorComponent;
  let fixture: ComponentFixture<NgAvatarCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAvatarCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAvatarCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
