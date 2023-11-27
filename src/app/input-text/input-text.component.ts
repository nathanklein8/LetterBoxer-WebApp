import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})

export class InputText {

  legalChars: Array<string> = []

  userInput: string = ''
  processedResult: string = ''
  
  onKey(v: string) {
    this.userInput = v
  }

  isLegalInput(): boolean {
    let chars: Array<string> = this.userInput.split(" ")
    if (chars.length != 4) {
      return false
    } 
    for (let c of chars) {
      if (c.length != 3) {
        return false
      }
      for (let ch of c) {
        if (!this.legalChars.includes(ch)) {
          this.legalChars.push(ch)
        }
      }
    }
    if (this.legalChars.length != 12) {
      return false
    }
    return true
  }

  processInput() {

    this.legalChars.length = 0;

    const valid: boolean = this.isLegalInput();
    if (!valid) {
      this.processedResult = ' invalid input '
      this.legalChars.length = 0;
      return
    }

    this.processedResult = ' success '

    //continue processing

  }

}
