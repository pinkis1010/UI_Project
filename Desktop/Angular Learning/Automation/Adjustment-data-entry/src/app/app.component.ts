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
  invalidNumber = false;

  AdjData = [
    {
      id: 1,
      vname: "pinki",
      vsfid: "C3966",
      vdate: "0/01/2020",
      vhours: "05",
      vcalls: 23,
      vtalktime: 34
    },
    {
      id: 2,
      vname: "xyz",
      vsfid: "C3966",
      vdate: "0/01/2020",
      vhours: "05",
      vcalls: 23,
      vtalktime: 34
    }
  ];
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

  checkValue(ev) {
    console.log(ev.target.value);
    if (ev.target.value > 9 || ev.target.value < 2) {
      this.invalidNumber = true;
    }
  }

  /*
submit() {

  console.log(this.addDataArray, 'Received Data on click of submit');
    
}*/

  addData() {
    this.addDataArray.push(this.adjustmentData);
    console.log(this.addDataArray, "Received Data on click of submit");
  }

  deleteRow() {
    //  this.addDataArray.push(this.adjustmentData);
    console.log(this.addDataArray, "Received Data on click of submit");
  }
}
