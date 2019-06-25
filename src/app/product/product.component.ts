import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  submitted = false;
  myForm: FormGroup;
  // sku: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    // this.sku = this.myForm.controls['sku'];

    this.f.sku.valueChanges.subscribe(
        (value: string) => {
        console.log('sku changed to:', value);
    });
  }

  get f() { return this.myForm.controls; }

  ngOnInit() {
  }

  

  onSubmit(form: any): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }

    console.log('you submitted value: ', form);
  }

}
