import { Component, EventEmitter, Output } from '@angular/core';
import { PAGE_PASSWORD } from '../../password.const';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blur-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="blur-overlay">
      <div class="password-dialog">
        <h2>Enter Password</h2>
        <input type="password" [(ngModel)]="passwordInput" (keyup.enter)="checkPassword()" placeholder="Password" />
        <button (click)="checkPassword()">Unlock</button>
        <div *ngIf="error" class="error">Incorrect password. Please try again.</div>
      </div>
    </div>
  `,
  styles: [`
    .blur-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1000;
    }
    .password-dialog {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
      text-align: center;
      min-width: 300px;
      z-index: 1001;
    }
    input[type="password"] {
      width: 100%;
      padding: 0.5rem;
      margin: 1rem 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 0.5rem 1.5rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    .error {
      color: #dc3545;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  `],
  styleUrls: ['./blur-password.component.css']
})
export class BlurPasswordComponent {
  passwordInput = '';
  unlocked = false;
  error = false;

  @Output() unlockedEvent = new EventEmitter<void>();

  checkPassword() {
    if (this.passwordInput === PAGE_PASSWORD) {
      this.unlocked = true;
      this.error = false;
      this.unlockedEvent.emit();
    } else {
      this.error = true;
    }
  }
}
