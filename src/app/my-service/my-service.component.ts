import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

 
  public iplplayers= []

  constructor(private list:DataService) { }

  ngOnInit(): void {
           this.iplplayers=this.list.getList();
  }

}
