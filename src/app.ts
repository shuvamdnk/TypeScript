class Department {
  // name: string;
  constructor(public name:string, protected readonly id:string) {
    // this.name = name;
  }

  describe (this:Department){
    // this.id = 'ss';
    console.log(this.name);
  }
}

//  inheritance
class ITDepertment extends Department{
  constructor (public id:string){
    super('IT',id);
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






