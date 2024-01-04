import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL='http://localhost:8300/'


  constructor(private httpclient: HttpClient) { 

  }

  getPatient() : Observable<Patient[]> {
      return this.httpclient.get<Patient[]>('http://localhost:8300/');
  }

createPatient(patient : Patient) : Observable<Object> {
  const pid = patient.pid;
  const patientName = patient.patientName;
  const patientProblem = patient.patientProblem;
  const url = `http://localhost:8300/add/${pid}/${patientName}/${patientProblem}/`;
    return this.httpclient.post(url, patient,  { responseType: 'text' as 'json' })
} 

updatePatient(patient : Patient) : Observable<Object> {
  const pid = patient.pid;
  const patientName = patient.patientName;
  const patientProblem = patient.patientProblem;
  const url = `http://localhost:8300/update/${pid}/${patientName}/${patientProblem}/`;
    return this.httpclient.put(url, patient,  { responseType: 'text' as 'json' })
} 

DeletePatientComponent(pid: number) : Observable<number> {

  const url = `http://localhost:8300/del-user/${pid}/`;  
  return this.httpclient.delete<number>(url,  { responseType: 'text' as 'json' })
}

findById(pid : number) : Observable<Patient> {
  const url = `http://localhost:8300/findId/${pid}/`;
  return this.httpclient.get<Patient>(url)   
}
}
