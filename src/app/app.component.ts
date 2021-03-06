import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularpractice';


  users$: User[];
  constructor(private dataService: DataService){}
   ngOnInit() {
  return this.dataService.getUsers()
 .subscribe(data=> {this.users$=data}, error=>{});
}
}
