import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    hasError: any;
    inputValue: any;
    constructor(
    ) {
        this.hasError = false;
    }
    addTask() {
        if (!this.inputValue) {
            this.hasError = true;
            console.log(this.hasError);
        } else {
            this.hasError = false;
        }
    }
}