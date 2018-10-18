import {Component, OnInit, DoCheck} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Observable} from 'rxjs';
import {User} from '../../../core/auth/entity/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../../core/auth/entity/userDto';
import { HttpService } from '../../../core/auth/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit, DoCheck {
  users: UserDto[];
  userId: string;
  currentUser: UserDto;

  constructor(
              private userStore: UserStore,
              private formBuilder: FormBuilder,
              private httpService: HttpService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => {
      this.users=data;
      this.users.forEach((user: UserDto) => {
        if(user.id === this.userId) {
          this.currentUser = user;
        }
      });
    });   
  }

  ngDoCheck() {
    
  }

  updateUser(): void {
    this.httpService.updateUser(this.userId, JSON.stringify(this.currentUser)).subscribe(data => {
      console.log(data as string);
      this.currentUser = JSON.parse(data as string);
    });
  }
}
