import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotesComponent } from './components/notes/notes.component';
import { ContentDirective } from './components/dialog/content.directive';



@NgModule({
  declarations: [CustomFormComponent, DialogComponent, HeaderComponent, ContentComponent, FooterComponent, NotesComponent, ContentDirective],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [CustomFormComponent]
})
export class CustomFormModule { }
