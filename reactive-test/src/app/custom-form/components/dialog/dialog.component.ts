import { Component, ComponentFactoryResolver, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentDirective } from './content.directive';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  compName = 'CONTENT';
  masterForm: FormGroup;

  @ViewChild(ContentDirective, {static: true}) appContent: ContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialogService: DialogService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    

  ngOnInit(): void {
    
    this.buildComponent(this.compName);
    
    
    
    this.masterForm = this.fb.group({
      formTitle: new FormControl(''),

      basicInfo: new FormControl(''),
      addressInfo: new FormControl(''),

      specialInfo: new FormControl('')
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  buildComponent(name: string) {
    let resComp = this.dialogService.getSelectedComponent(name);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(resComp);

    const viewContainerRef = this.appContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    // componentRef.instance.data = resComp;
  }

}
