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
  }

  registationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    this.store.dispatch(fromAuthActions.RegistrationCommenced({ credential: this.registationForm.value }))
  }
}
