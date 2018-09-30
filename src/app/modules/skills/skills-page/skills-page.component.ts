import {Component, OnInit} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Observable} from 'rxjs';
import {User} from '../../../core/auth/entity/user';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})

export class SkillsPageComponent implements OnInit {

  $user: Observable<User>;

  constructor(private userStore: UserStore) {
  }

  ngOnInit() {
    this.$user = this.userStore.$get();
  }
}
