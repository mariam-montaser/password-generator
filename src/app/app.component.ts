import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length: number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password: string = '';

  onChangeLength(length: string) {
    // this.length = +length;
    const parsed = parseInt(length);
    if (!isNaN(parsed)) {
      this.length = parsed;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = this.generatePassword();
  }

  generatePassword(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }

    let generatedPass = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }

    return generatedPass;
  }
}
