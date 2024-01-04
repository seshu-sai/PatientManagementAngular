import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
patients : Patient[];
foundRecord : any;
pid: number;
patient = new Patient()
patient1 = new Patient()

  constructor(private patientService : PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatient();
  }

private getPatient() {

  this.patientService.getPatient().subscribe(data => {
    this.patients = data;
  }) 
}

OnSubmitUpdate() {
  this.router.navigate(['./update-patient']),
  console.log('update clicked')
}

delPatient(pid: number) {

  this.patientService.DeletePatientComponent(pid).subscribe(data => {
    this.getPatient;
      alert("patient deleted succesfully")
    })
}

findPatient(pid) {
  this.foundRecord = this.patientService.findById(pid).subscribe(data =>{
      this.patient = data;
      console.log(this.patient);
      if(!this.pid) {
        console.log("record not available")
      }
  }
    );
  
  }

}


