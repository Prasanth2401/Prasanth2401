import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
empform: FormGroup;

  Education: string[]=[
    "Bachelor's Degree",
    "Master's Degree",
    "Diploma"
  ];

  constructor(private _fb: FormBuilder){
    this.empform = this._fb.group({
      firstName:"",
      lastName: "",
      email:"",
      DateofBirth:"",
      gender:"",
      education:"",
      company:"",
      experience:"",
      package:"",
    });
  }

  onFormSubmit(){
    if(this.empform.valid){
      console.log(this.empform.value);
    }
  }
}
