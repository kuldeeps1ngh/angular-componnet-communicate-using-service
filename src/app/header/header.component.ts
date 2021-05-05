import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.islogin.subscribe(res => {
      console.log('checkLogin val>>', res);
      this.isLoggedIn = res;
    })
  }

}