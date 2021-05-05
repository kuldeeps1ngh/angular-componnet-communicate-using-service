import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  val = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  changeVal() {
    if (this.val) {
      this.val = false;
    } else {
      this.val = true
    }
    this.sharedService.islogin.emit(this.val);
  }

}