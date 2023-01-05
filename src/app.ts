class Department {
  name: string;
  constructor(n:string) {
    this.name = n;
  }

  describe (this:Department){
    console.log(this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = {
    name:'Management',
    describe:accounting.describe,
    abcd:'hiii'
};
accountingCopy.describe();




