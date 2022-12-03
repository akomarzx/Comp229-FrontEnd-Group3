import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/auth/data-access/models/user.model';
import * as fromAuthState from '../../../data-access/store'
import * as fromAuthActions from '../../../data-access/store/auth.actions'
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) {
    this.currentUser$ = this.store.select(fromAuthState.selectUser)
  }

  ngOnInit(): void {
    this.currentUser$.subscribe(user => {
      this.currentUser = user;
    })
    this.updateProfileForm.patchValue(this.currentUser);
  }

  updateProfileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required]
  })

  currentUser!: UserProfile;
  currentUser$: Observable<UserProfile>;

  onSubmit() {
    let profile = this.updateProfileForm.value as UserProfile
    this.store.dispatch(fromAuthActions.onProfileUpdateCommenced({ userProfile:  profile }))
  }
}
