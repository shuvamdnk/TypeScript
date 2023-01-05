"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(this.name);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = {
    name: 'Management',
    describe: accounting.describe,
    abcd: 'hiii'
};
accountingCopy.describe();
