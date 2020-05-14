import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // Queryparameter
    this.route.queryParamMap.subscribe(params => console.log(params.get('id')) );
   }

  ngOnInit(): void {
  }

}
