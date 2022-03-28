import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public myColor = "orange";
  public required = true;
  
  public myStyle = {
    color : "gold",
    font :"italic",
    size : "50px"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
