import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  nextID:number = 1;
  constructor() { }
  incrementID(){
    this.nextID += 1;
  }
}

