import { Component, OnInit } from '@angular/core';
// this will give access to the route perameters
import { ActivatedRoute } from '@angular/router';     
//Sometimes, you may need to change the router outlet 
//component based on logic occurring in a component class.
import { Router } from '@angular/router';  
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;


//Next, we have to create an instance of ActivatedRoute 
//through dependency injection, which is done in the constructor 
//of the class:  
  constructor(private route: ActivatedRoute, private Router: Router, private _data: DataService) { 
    // 1. subscribing to the router parameters
    // 2. take the result and console logging the result.id.
  
    this.route.params.subscribe(res => console.log(res.id));
    // In a real world context, instead of console logging, 
    //you would create a property and bind the res.id to that property 
    //and use it as needed.
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);
  }

  sendMeHome() {
    // the '' coinside with app-routing module's Routes HomeCOmponent path
    this.Router.navigate(['']);
  }

}
