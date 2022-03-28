import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public myText1 ="TextColor";
  public myText2 = "TextSize";
  public myText3 = "TextStyle";
  public myText4 = "TextFamily";

  public required = true ;

  public Group = {
    "TextColor" : this.required,
    "TextSize" : this.required,
    "TextFamily" : this.required 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
