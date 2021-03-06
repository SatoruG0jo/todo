import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss']
})
export class AppSelectComponent implements OnInit {

  @Input() form!: AbstractControl;
  @Input() name!: string;
  @Input() label!: string;
  @Input() showInputValidationMessages!: boolean;
  @Input() tooltiptext!: string;
  @Input() icon!: string;
  @Input() isDisabled!: boolean;
  @Input() floatLabel!: FloatLabelType;
  @Input() options!: Array<any>;
  control!: FormControl;
  isRequired!: boolean;

  constructor() { }

  ngOnInit() {

    this.control = this.form.get(this.name) as FormControl;
    if (this.control && this.control.validator) {
      const validator = this.control.validator(new FormControl());
      this.isRequired = (validator && validator['required']) ? true : false;
    }

    // Default float type Auto
    if (this.floatLabel) {
      this.floatLabel = 'auto';
    }

  }

}
