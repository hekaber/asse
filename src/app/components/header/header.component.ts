import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  isAuthenticated: boolean = false;
  authSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router) { 

  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authSubject.subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      }
    );
    this.authService.emitAuthSubject();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onDisconnect() {
    console.log('click');
    this.authService.signOutUser().then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
