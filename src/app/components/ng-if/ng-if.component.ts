import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app="app-ng-if"]',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  show:boolean = false
  selDate: Date = new Date()
  curDate : Date = new Date(this.selDate)
 age:number=20
 showIf(){
    // if(this.selDate.toLocaleDateString()>this.curDate.toLocaleDateString()){
    //   this.show=true
    // }
    // else {
    //   this.show=false
    // }
    // return this.show;
    if(this.age>30){
      return true;
    }else return false;
  }
  test:boolean = this.showIf();
  constructor() { }

  ngOnInit(): void {
  }

}
