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
  private static instance : ITDepertment;
  private constructor (public id:string){
    super('IT',id);
  }

  static getInstance(){
    if(ITDepertment.instance){
      return this.instance
    }
    this.instance = new ITDepertment('IT2')
    return this.instance;
  }

}

// const accounting = new ITDepertment('d2');
// accounting.describe();
// const accountingCopy = {
//     name:'Management',
//     describe:accounting.describe,
//     abcd:'hiii'
// };
// accountingCopy.describe();

const it1 = ITDepertment.getInstance();
const it2 = ITDepertment.getInstance();
console.log(it1,it2);







