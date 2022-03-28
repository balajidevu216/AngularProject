import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name ="Using Pipes";
  public msg = "Using title Case and Slice";
  constructor() { }

  ngOnInit(): void {
  }

}
