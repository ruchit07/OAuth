import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  @Input() content;
  @Output() onContectChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onContentChanged(e) {
    if (e && e.html) {
      this.onContectChange.emit(e.html);
    }
  }
}
