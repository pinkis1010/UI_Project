import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import custom validator to validate that password and confirm password fields match

export class AdjustmentDataValues {
  name: string;
  date: any;
  SFID: string;
  adjustmentHours: number;
  adjustmentCalls: number;
  adjustmentTalkTime: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Adjustment-data-entry";
  adjustmentData: AdjustmentDataValues = new AdjustmentDataValues();
  addDataArray = [];
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      sfid: ["", Validators.required],
      date: [new Date(), Validators.required],
      tt: [""],
      hours: [""],
      calls: [""]

      //   lastName: ['', Validators.required],
      //  email: ['', [Validators.required, Validators.email]],
      //  password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log("registerForm", this.registerForm.value);

    alert("SUCCESS!!");
  }

  /*
submit() {

  console.log(this.addDataArray, 'Received Data on click of submit');
    
}

addData() {

  this.addDataArray.push(this.adjustmentData)
  console.log(this.addDataArray, 'Received Data on click of submit');
  
}*/
}
