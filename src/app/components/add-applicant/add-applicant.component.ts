import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { APPLICANT } from 'src/app/Applicants';
import { UiService } from 'src/app/services/ui.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent implements OnInit {
  @Output() onAddApplicant: EventEmitter<APPLICANT> = new EventEmitter();

  firstName: string | undefined;
  lastName: string | undefined;
  companyName: string | undefined;
  goodStanding: boolean = false;

  subscription: Subscription;
  showAddApplicant: boolean | undefined;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddApplicant = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {  
    if(!this.firstName){
      alert("Please add first name");
      return;
    }
    if(!this.lastName){
      alert("Please add last name");
      return;
    }
    if(!this.companyName){
      alert("Please add company name");
      return;
    }
    if(!this.goodStanding){
      alert("Please set applicant standing");
      return;
    }

    const newApplicant = {
      //Setters
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.companyName,
      goodStanding: this.goodStanding

    }
    //TODO: emit event
    this.onAddApplicant.emit(newApplicant);

    this.firstName = '';
    this.lastName = '';
    this.companyName = '';
    this.goodStanding = false;

  }
}
