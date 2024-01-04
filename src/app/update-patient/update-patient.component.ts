import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient()

  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
  }

  updatePatient() {
    this.patientService.updatePatient(this.patient).subscribe(data =>{
      console.log(data);
      alert("patient updated succesfully")
    },
    error => {
      console.error('API Error:', error);
    })

}
onSubmit() {
  console.log(this.patient);
  this.updatePatient;
  this.updatePatient()
}

}
