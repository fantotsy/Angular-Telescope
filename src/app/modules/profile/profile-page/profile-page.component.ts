import {Component, OnInit} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Observable} from 'rxjs';
import {User} from '../../../core/auth/entity/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../../core/auth/entity/userDto';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {

  $user: Observable<User>;
  form: FormGroup;

  constructor(
              private userStore: UserStore,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.$user = this.userStore.$get();
    this.form = this.formBuilder.group({
      name: [this.$user, Validators.required],
      surname: [this.$user, Validators.required]
    });
  }

  updateProfile(): void {
    console.log(this.$user)
    const updates = this.form.value as User;
    this.userStore.update(new User(
      1,
      updates.name,
      updates.surname,
      null,
      ''
    ));
  }
}
