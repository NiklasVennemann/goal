export class Goal {
    constructor(
        public id:number,
        public name:string,
        public content:string,
        public firstGivenValue: number,
        public fittingValue:number,
        public someone_would_like_to_implement:boolean,
        public i_know_how_to_implement_it:boolean
    ){
        
    }
}
