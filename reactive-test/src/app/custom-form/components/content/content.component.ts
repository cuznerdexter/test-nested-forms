import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContentComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContentComponent),
      multi: true
    }
  ]
})
export class ContentComponent implements OnInit, ControlValueAccessor {

  public contentInfoForm: FormGroup = new FormGroup(
    {
      contentNotes: new FormControl("",[Validators.required]),
      contentData: new FormControl("", [Validators.required])
    });

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.contentInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.contentInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.contentInfoForm.disable() : this.contentInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    console.log("Basic Info validation", c);
    return this.contentInfoForm.valid ? null : { invalidForm: {valid: false, message: "contentInfoForm fields are invalid"}};
  }

}
