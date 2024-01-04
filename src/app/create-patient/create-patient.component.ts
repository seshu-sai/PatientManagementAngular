import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient()

  constructor(private patientService : PatientService,
    private router : Router) { }

  ngOnInit(): void {
  }

createPatient() {
  this.patientService.createPatient(this.patient).subscribe(data =>{
    console.log(data);
    alert("Data inserted succesfully")
  },
  error => {
    console.error('API Error:', error);
  })

}


onSubmit() {
  console.log(this.patient);
  this.createPatient;
  this.createPatient()
}
}

