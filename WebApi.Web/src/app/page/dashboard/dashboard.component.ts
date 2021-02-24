import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content = "";

  constructor() { }

  ngOnInit(): void {
  }

  onContectChanged(content: any) {
    this.content = content;
    console.log(this.content);
  }

}
