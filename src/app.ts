// interface
interface Person{
  name:string;
  age:number;

  greet(message:string) : void;
}

let user1:Person;
user1 = {
  name:"Shuvam",
  age:24,
  greet(message:string){
    console.log(message +' '+ this.name);
    
  }
}

user1.greet('Welcome : ')



