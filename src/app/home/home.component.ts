import { Component, OnInit } from '@angular/core';
// import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';
// create an instance of dataservice through dependency injection

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // this is where you can define your animations and properties of the animations
  
  animations: [
    
    // 'goals' is the name of your animation. 
    // in the [] this is where a bunch or your animation specifics reside
    trigger('goals', [ 
      // * => * means this transition applies to any state to any state
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        // stagger - staggering for 300ms, take a number of elements in the dom (our list for instance)
        // and set 300s delay on when each subsequent elements in the dom will start to animate
        query(':enter', stagger('300ms', [
          // inside the keyframes, it sets a number of style functions
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
          //Notice we've added a query for :leave? It's as simple as that, and then reversing
          // some of the style values to produce the opposite effect of opacity and Y movements.
          query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
        
      ])
    ])
  ]
  
  // ]
  // styles: [`
  //   p { font-weight: bold}
  //   div {color: red}
  // `]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add item";
  goalText: string = 'my first life goal';
  // goals = ['My first life goal', 'i want to climn mount', 'go skiing'];
  goals = [];

  // inside the constructor create an instance of the data service _data
  constructor( private _data: DataService) { }; 

  // the lifecycle hook which is initiated when the app loads or the component loads
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    //splice--Removes elements from an array and, if necessary, 
    //inserts new elements in their place, returning the deleted elements.
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }


}
