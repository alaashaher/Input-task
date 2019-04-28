import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    hasError: any;
    inputValue: any;
    value: any;
    ListValue: any;
    ShowList: boolean;
    editModeClass: string;
    count: any;
    editButton: boolean;
    editButtonDiv: boolean;
    ValueEdit: any;
    constructor(
    ) {
        this.count = 0;
        this.hasError = false;
        this.ShowList = false;
        this.editButton = false;
        this.editButtonDiv = true;
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
        this.inputValue = '';
    }
    addTask() {
        if (!this.inputValue) {
            this.hasError = true;
        } else {
            this.addValue();
            this.ShowList = true;
            this.hasError = false;
        }
    }
    delete(value) {
        const index = this.ListValue.indexOf(value, 0);
        if (index > -1) {
            this.ListValue.splice(index, 1);
        }
    }
    editdiv(value) {
        this.editModeClass = 'editMode';
        this.editButton = true;
        this.editButtonDiv = false;
        this.ValueEdit = value;
    }

    editValue(value) {
        const index = this.ListValue.indexOf(this.ValueEdit, 0);
        this.ListValue[index] = value;
        console.log(value);
        this.editModeClass = 'editMode1';
        console.log(this.ListValue);
        this.editButton = false;
        this.editButtonDiv = true;
    }
}
