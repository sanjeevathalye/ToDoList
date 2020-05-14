import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    //URL to navigate to
    this.rout.navigate(['']);
  }

}
