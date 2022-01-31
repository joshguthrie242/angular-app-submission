import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Bonds Application Submission';  
  showAddApplicant: boolean | undefined;
  subscription: Subscription | undefined;
   
  //In order to use a service you need to add it to your constructor  
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddApplicant = value);
   }

  ngOnInit(): void {
  } 

  toggleAddApp(){
    this.uiService.toggleAddApplicant();
    console.log('Added App');
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
