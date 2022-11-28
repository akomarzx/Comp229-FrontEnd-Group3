import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '../../data-access/store/auth.actions'
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.registationForm.get('password')?.valueChanges.subscribe(
      () => {
        console.log(this.registationForm.get('password')?.errors)
      }
    )
  }

  registationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    //TODO: Backend endpoint to check for user that has the username
    // Implement a async validator
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(7)]]
  })

  onSubmit() {
    this.store.dispatch(fromAuthActions.RegistrationCommenced({ credential: this.registationForm.value }))
  }
}
