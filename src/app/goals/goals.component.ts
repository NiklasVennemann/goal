import { Component, OnInit, Input } from '@angular/core';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  nextID: number = 0;
  inputContent: string = "Ich brauche einen Laptop für maximal 1000 Euro.";
  constructor(private goalService: GoalService) { }

  ngOnInit() {
    // if(true){alert("ngOnInit()");}
  }

}
