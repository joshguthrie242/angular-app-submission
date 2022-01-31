import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import {Observable, of} from 'rxjs'
import {Observable} from 'rxjs'
import { APPLICANT } from 'src/app/Applicants'; 
//import { APPLICANTS } from 'src/app/mock-applicants'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private apiUrl = 'http://localhost:5000/applicants';

  constructor(private http: HttpClient) { }

  getApplicants(): Observable<APPLICANT[]> {
    //const applicants = of(APPLICANTS);
    //return applicants;
    return this.http.get<APPLICANT[]>(this.apiUrl);
  }

  deleteApplicant(applicant: APPLICANT): Observable<APPLICANT> { 
    const url=`${this.apiUrl}/${applicant.id}`;
    console.log("Service Talking")
    return this.http.delete<APPLICANT>(url)
  }

  updateApplicantStanding(applicant: APPLICANT): Observable<APPLICANT> {
    const url = `${this.apiUrl}/${applicant.id}`;
    return this.http.put<APPLICANT>(url, applicant, httpOptions);
  }

  addApplicant(applicant: APPLICANT): Observable<APPLICANT> {
    return this.http.post<APPLICANT>(this.apiUrl, applicant, httpOptions )
  }
}
