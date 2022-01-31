import { Component, OnInit } from '@angular/core';
import {ApplicantService} from 'src/app/services/applicant.service';
import { APPLICANT } from 'src/app/Applicants'; 
import { APPLICANTS } from 'src/app/mock-applicants';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants: APPLICANT[] = [];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void { 
    this.applicantService.getApplicants().subscribe((applicants) => this.applicants = applicants);
  }

  deleteApplicant(applicant: APPLICANT){
    //Remove the applicant from the UI list
    this.applicantService.deleteApplicant(applicant).subscribe(() => (this.applicants = this.applicants.filter(a => a.id !== applicant.id)));
    console.log("Deleted an applicant")
  }

  toggleApplicant(applicant: APPLICANT){
    applicant.goodStanding = !applicant.goodStanding;
    this.applicantService.updateApplicantStanding(applicant).subscribe()
    console.log("Toggled Applicant")
  }

  addApplicant(applicant: APPLICANT){
    this.applicantService.addApplicant(applicant).subscribe((applicant) => this.applicants.push(applicant));
    console.log(applicant)
  }
}
 