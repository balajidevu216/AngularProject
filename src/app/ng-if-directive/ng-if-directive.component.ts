import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  public status = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    alert("Loading Log In page ! Please Wait !")
  }
  clickOn(){
    alert("Loading Sign In page ! Please Wait !")
  }

}
