import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessage } from 'src/app/shared/service/error-message.service';
import { QuillEditorComponent } from './quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  declarations: [
    QuillEditorComponent
  ],
  exports: [
    QuillEditorComponent
  ],
  providers: [
    ErrorMessage
  ],
})
export class QuillEditorModule { }
