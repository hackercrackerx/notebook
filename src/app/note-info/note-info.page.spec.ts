import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteInfoPage } from './note-info.page';

describe('NoteInfoPage', () => {
  let component: NoteInfoPage;
  let fixture: ComponentFixture<NoteInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
