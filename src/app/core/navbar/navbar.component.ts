import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/auth/data-access/store';
import * as fromAuthActions from '../../auth/data-access/store/auth.actions'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store, private router: Router
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated)
  }

  ngOnInit(): void {
  }

  isAuthenticated$: Observable<boolean> | undefined;

  onLogOut() {
    this.store.dispatch(fromAuthActions.onLogOutCommenced());
    this.router.navigate(['/']);
  }
}

