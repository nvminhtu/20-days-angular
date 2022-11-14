import { Component, OnInit } from '@angular/core';
// su dung localStorage tu 1 service
import { LocalStoreService } from '../local-store.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
})
export class NotepadComponent {
  title = 'localStorage-app';
  textContent: string = '';
  constructor(private localStore: LocalStoreService) {}

  ngOnInit(): void {
    // this.localStore.saveData('default_text', 'jk123');
    this.textContent = this.localStore.getData('textEditorValue'); // must use this to call the private property
    // console.log('descript data', this.localStore.getData('id'));
  }
  saveTextEditor() {
    console.log('save noi dung Text Editor');
    this.localStore.saveData('textEditorValue', this.textContent);
  }
  getTextEditor() {
    this.localStore.getData('textEditorValue');
  }
  removeTextEditor() {
    this.localStore.removeData('textEditorValue');
  }
  clearTextEditor() {
    console.log('Clear data in Editor');
    this.localStore.clearData(); // remove in LocalStorage
    this.textContent = ''; // update them value cho property tro ve null
  }
}
