import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector:'[app-root]',
  // selector: '[app="app-root"]',
  selector: '.app-root',

  templateUrl: './app.component.html',
  // template: `<div><h1> This is my template from
  //  app.component.ts</h1></div>`,

  styleUrls: ['./app.component.css']
  // styles: [`
  // h1{
  //   color:red
  // }
  // `]
})
export class AppComponent {
  title = 'angular-practise';
 fullName ="Srujana Duvvuri";
 name="Name";
 nameDefault = "Enter your name";
 text="text"
 hello="Hellow there!!!"
 url="www.google.com"
 action="getName()"
 actionType="submit"
 age=0
getAge(){
  alert(this.age)
  if(this.age>30){
  this.age=25
}
  else{
    this.age=20
  }
}
 getName(){
   this.title= "new title"
   this.fullName="New name"
   return "Enter name";
 }
 getDefault(){
   this.nameDefault="Satya"
 }
 setName(fullName : string){
   this.fullName = fullName
 }
}
