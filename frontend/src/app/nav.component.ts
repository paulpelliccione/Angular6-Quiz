import { Component } from '@angular/core'

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Quiz</button>
        <button mat-button routerLink="/question">Question</button>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
  `
})
export class NavComponent {
}
