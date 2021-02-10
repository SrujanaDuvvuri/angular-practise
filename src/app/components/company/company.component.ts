import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app="app-company"]',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies=[
    {id:101 ,name:"test company1", isParent:true},
    {id:102 ,name:"test company2", isParent:false},
    {id:103 ,name:"test company3", isParent:true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
