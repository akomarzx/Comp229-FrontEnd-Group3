import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '../../data-access/store/auth.actions'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    this.store.dispatch(fromAuthActions.LoginCommenced({ credential: this.loginForm.value }));
  }
}
