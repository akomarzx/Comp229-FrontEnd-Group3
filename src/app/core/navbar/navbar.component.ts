import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/auth/data-access/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated)
  }

  ngOnInit(): void {
  }

  isAuthenticated$: Observable<boolean> | undefined;

  onLogOut() {

  }
}
