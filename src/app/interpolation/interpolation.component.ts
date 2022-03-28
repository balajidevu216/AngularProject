import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = "Interpolation ";
  public upper = "uppercase works";
  public lower = "LOWERCASE WORKS";
  public myUrl = window.location.href;


  constructor() { }

  ngOnInit(): void {
  }

  userName() {
    return "welcome to "+this.name;
  }

}
