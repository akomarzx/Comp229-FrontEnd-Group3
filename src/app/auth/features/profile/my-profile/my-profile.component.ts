import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuthState from '../../../data-access/store'
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

  currentUser!: { firstName: string, lastName: string, email: string, username: string };
  currentUser$: Observable<{ firstName: string, lastName: string, email: string, username: string }>;

  onSubmit() {
    console.log(this.updateProfileForm.value)
  }
}
