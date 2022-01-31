import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { APPLICANT } from 'src/app/Applicants';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-applicant-item',
  templateUrl: './applicant-item.component.html',
  styleUrls: ['./applicant-item.component.css']
})
export class ApplicantItemComponent implements OnInit {
  @Input() applicant!: APPLICANT;
  @Output() onDeleteEvent: EventEmitter<APPLICANT> = new EventEmitter();
  @Output() onToggleEvent: EventEmitter<APPLICANT> = new EventEmitter();
  faTimes = faTimes;
  touchtime = 0;
  showMessage = false;

  constructor() {
    
  }

  ngOnInit(): void {}

  onDelete(applicant: any) {
    console.log(applicant);
    this.onDeleteEvent.emit(applicant);
  }
  
  onToggle(applicant: any) {

    console.log("Calling On Toggle");
    this.onToggleEvent.emit(applicant);
  }
}
