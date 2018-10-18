import {Component, OnInit, DoCheck} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Observable} from 'rxjs';
import {User} from '../../../core/auth/entity/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../../core/auth/entity/userDto';
import { HttpService } from '../../../core/auth/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})

export class SkillsPageComponent implements OnInit {

  $user: Observable<User>;
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
    this.$user = this.userStore.$get();
    this.httpService.getUsers().subscribe(data => {
      this.users=data;
      this.users.forEach((user: UserDto) => {
        console.log(user);
        if(user.id === this.userId) {
          this.currentUser = user;
        }
      });
    });  
  }

  updateUser(surname): void {
    this.httpService.updateUser(this.userId, JSON.stringify(this.currentUser)).subscribe(data => {
      console.log(data as string);
      this.currentUser = JSON.parse(data as string);
    });
  }
}
