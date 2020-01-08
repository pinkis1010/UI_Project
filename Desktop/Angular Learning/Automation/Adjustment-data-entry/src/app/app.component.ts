import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Adjustment-data-entry";
  addDataArray = [];
  registerForm: FormGroup;
  submitted = false;
  invalidNumber = false;
  index;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      sfid: ["", Validators.required],
      date: ["", Validators.required],
      talktime: [""],
      hours: [""],
      calls: [""]
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
  }

  checkValue(ev) {
    console.log(ev.target.value);
    if (ev.target.value > 9 || ev.target.value < 2) {
      this.invalidNumber = true;
    } else {
      this.invalidNumber = false;
    }
  }

  addData() {
    this.submitted = true;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.submitted = false;
    this.addDataArray.push(this.registerForm.value);
    this.registerForm.reset();
    console.log(this.addDataArray, "Data Added Successfully");

    console.log(this.submitted, " sub val");
  }

  deleteRow(dataObj) {
    let index = this.addDataArray.indexOf(dataObj);
    console.log(index, "index aaya");
    this.addDataArray = this.addDataArray.filter((val, i) => i != index);
    console.log(dataObj);
    // this.index = this.addDataArray.indexOf(dataObj);
    // this.addDataArray.splice(1);
    // console.log(this.addDataArray.length, "length of obj");
  }
}
