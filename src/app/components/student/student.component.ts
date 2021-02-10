import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students=[
    {id:1,
      name:"Satya",
      age:20,
    subjects:[
      {id:12,name:"Maths",grade:"MPC"},
      {id:14,name:"Physics",grade:"MPC"},
      {id:16,name:"Chemistry",grade:"MPC"},
    ]},
    {id:2,
      name:"Srujana",
      age:18,
    subjects:[
      {id:22,name:"Maths",grade:"MSB"},
      {id:24,name:"Science",grade:"MSB"},
      {id:26,name:"Biolgy",grade:"MSB"},
    ]},
    {id:3,
      name:"Adrija",
      age:16,
    subjects:[
      {id:32,name:"Maths",grade:"EMS"},
      {id:34,name:"Science",grade:"EMS"},
      {id:36,name:"English",grade:"EMS"},
    ]}
  ]
  constructor() { 

  }

  ngOnInit(): void {
  }

}
