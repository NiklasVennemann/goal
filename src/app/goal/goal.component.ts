import { Component, OnInit, Input } from '@angular/core';
import { GoalService } from '../goal.service';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() id : number;
  lowerGoals: Array<Goal> = [];
  constructor(private goalService: GoalService) { }

  ngOnInit() {
  }
  onAddLowerGoal(){
    let newGoal = new Goal(this.goalService.nextID,"lowerGoalfrom"+this.id,"duda",0,0,false,false);
    this.lowerGoals.push(newGoal);
    this.goalService.incrementID();
    console.log("onAddLowerGoal()");
    console.log(this.lowerGoals);
    // var goalElement = document.registerElement('app-goal');
    // document.body.appendChild(new goalElement());
    // let newGoalText = document.createTextNode("Hi there and greetings!"); 
    // newGoal.appendChild(newGoalText);

    // let newGoal = document.createElement("app-goal");
    // newGoal.setAttribute("id", "999");
    // let currentGoal = document.getElementById(currentGoalID.toString());
    // document.body.insertBefore(newGoal, currentGoal);

    // newGoal.setAttribute("id", "1");
  }
}
