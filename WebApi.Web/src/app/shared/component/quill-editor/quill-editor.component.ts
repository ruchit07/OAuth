import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toolbar } from './quill-editor';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  @Input() content;
  @Output() onContectChange = new EventEmitter<any>();

  public isHideBlockDropdown: boolean = true;
  public editor;

  constructor() { }

  ngOnInit(): void {
  }

  //=============== Editor event : Start ==================================//

  /**
   * Triggered when instance of editor is created
   * @param editor 
   */
  onEditorCreated(editor) {
    this.editor = editor;
  }

  /**
  * Triggered when content in editor has changed
  * @param e 
  */
  onContentChanged(e) {
    if (e.text.replace(/^\s+|\s+$/g, '').slice(-1) == "/") {
      this.isHideBlockDropdown = false;
    }
    else {
      this.isHideBlockDropdown = true;
    }
  }

  /**
   * Set focus in editor
   */
  setFocus() {
    setTimeout(() => {
      this.editor.setSelection(this.editor.getLength());
    }, 50);
  }

  /**
   * Set content in editor
   * @param content 
   */
  setContent(content) {
    const delta = this.editor.clipboard.convert(content);
    this.editor.setContents(delta, 'api')
    this.setFocus();
  }

  blur() {
    console.log(this.editor.getContents());
  }
  //=============== Editor event : End  ==================================//


  //=============== Tool action : Start  =================================//
  plainText() {
    this.setContent(Toolbar.PlainText);
  }

  orderedList() {
    this.setContent(Toolbar.OrderedList);
  }

  unorderedList() {
    this.setContent(Toolbar.UnorderedList);
  }

  heading1() {
    this.setContent(Toolbar.Heading1);
  }

  heading2() {
    this.setContent(Toolbar.Heading2);
  }
  //=============== Tool action : End  =================================//
}
