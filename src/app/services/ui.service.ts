import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddApplicant: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddApplicant(): void {
    console.log("Toggle Add Applicant called");
    this.showAddApplicant = !this.showAddApplicant;
    this.subject.next(this.showAddApplicant);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
