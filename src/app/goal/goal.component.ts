import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() id : number;

  constructor() { }

  ngOnInit() {
  }
  onAddLowerGoal(currentGoalID:number){
    // var goalElement = document.registerElement('app-goal');
    // document.body.appendChild(new goalElement());
    let newGoal = document.createElement("app-goal");
    newGoal.setAttribute("id", "999");
    // let newGoalText = document.createTextNode("Hi there and greetings!"); 
    // newGoal.appendChild(newGoalText);
    let currentGoal = document.getElementById(currentGoalID.toString());
    document.body.insertBefore(newGoal, currentGoal);
    // newGoal.setAttribute("id", "1");
  }
}
