function add(n1:number,n2:number):number{
    return n1 + n2;
}
function printResult(result:number) {
    console.log(result);
}
// printResult(add(45,45))


// Function type
// let sum:Function;
// sum = add;

// specify specific type of function to be store
// let sum : (a:number,b:number) => number;
// sum = add;

// console.log(sum(45,65));

/**Function type and call back */
function addhandler(a:number,b:number,cb:(res : number) => void){
    let result = a+b;
    cb(result);
}

addhandler(12,50,(res) => {
    console.log(res);
})
