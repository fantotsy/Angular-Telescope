import {Component, OnInit} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {UserDto} from '../../../core/auth/entity/userDto';
import { HttpService } from '../../../core/auth/http.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  users: UserDto[];

  constructor(private userStore: UserStore,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => {
      this.users=data;
    });   
  }

}
