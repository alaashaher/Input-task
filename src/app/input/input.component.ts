import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    hasError: any;
    inputValue: any;
    ListValue: any;
    ShowList: boolean;
    // ListValue: any[] = new Array();
    constructor(
    ) {
        this.hasError = false;
        this.ShowList = false;
        // this.ListValue = ['alaa'];
        // this.ListValue = [{
        //     id: 1,
        //     name: 'Boyer Stanley',
        //   }];
    }
    ngOnInit() {
        this.ListValue = [];
    }
    addValue() {
        this.ListValue.push(this.inputValue);
    }
    addTask() {
        if (!this.inputValue) {
            this.hasError = true;
        } else {
            this.addValue();
            this.ShowList = true;
            this.hasError = false;
            console.log(this.ListValue, this.ShowList);
        }
    }
    delete(value) {
        console.log(value);
        const index = this.ListValue.indexOf(value, 0);
        if (index > -1) {
            this.ListValue.splice(index, 1);
        }
        console.log(this.ListValue);
    }
}