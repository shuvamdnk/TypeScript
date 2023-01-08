"use strict";
class Department {
    // name: string;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // this.name = name;
    }
    describe() {
        // this.id = 'ss';
        console.log(this.name);
    }
}
//  inheritance
class ITDepertment extends Department {
    constructor(id) {
        super('IT', id);
        this.id = id;
    }
}
const accounting = new ITDepertment('d2');
accounting.describe();
// const accountingCopy = {
//     name:'Management',
//     describe:accounting.describe,
//     abcd:'hiii'
// };
// accountingCopy.describe();
