import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  masterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      formTitle: new FormControl(''),

      basicInfo: new FormControl(''),
      addressInfo: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
