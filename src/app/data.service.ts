import { Injectable } from '@angular/core';
// A great way of sharing data between components
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// injectable decorator, it uses the @Injectable() decorator, 
//which means we can import it into other components and 
//access its properties and methods.
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // this data service once imported into other component, will give access to the goals arrays
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }

}
