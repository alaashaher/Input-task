import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    hasError: any;
    inputValue: any;
    // ListValue: [];
    ShowList: boolean;
    ListValue: any[] = new Array();
    constructor(
    ) {
        this.hasError = false;
        this.ShowList = false;
    }
    addTask() {
        if (!this.inputValue) {
            this.hasError = true;
        } else {
            this.ListValue.push(this.inputValue);
            console.log(this.ListValue);
            this.ShowList = true;
            this.hasError = false;
        }
    }
    delete(value) {
        const index = this.ListValue.indexOf(value, 0);
        if (index > -1) {
            this.ListValue.splice(index, 1);
        }
        console.log(this.ListValue);
    }
}