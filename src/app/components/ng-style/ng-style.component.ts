import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-ng-style]',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  url='url(../../assets/images/water.jpg)'
  color='yellow'
  size='1300px 300px'
  status = 'errors'
  constructor() { }

  ngOnInit(): void {
  }

}
