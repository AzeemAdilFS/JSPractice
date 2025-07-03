function Greet (name){
    console.log(`Hi! ${name}, Have a nice day!`)
}
Greet("MrNekoXD")

function compareTwoNumbers(num1,num2){
    if(num1 > num2){
        console.log(`${num1} is greater`)
    }else if(num1 < num2){
        console.log(`${num2} is greater`)
    }
}

compareTwoNumbers(23,56)

console.log(x);
var x = 10;

function counter(){
    let num = 0;
    return function increment(){
        return num = num + 1;
    }
}

const c = counter();
console.log(c());
console.log(c());




const aPromise = new Promise(( resolve , reject ) => {
    let res = true;
    if(res){
        setTimeout(() => resolve(true) , 2000  )
        
    }else{
        reject( new Error('Some ERROR'))
    }
})
aPromise
.then((result) => {console.log( 'a promise done' , result)})
.catch((err) => console.error(err))


const bPromise = new Promise(( resolve , reject ) => {
    let res = true;
    if(res){
        setTimeout(() => resolve(true) , 5000  )
        
    }else{
        reject( new Error('Some ERROR'))
    }
})
bPromise
.then((result) => {console.log( 'b promise done' , result)})
.catch((err) => console.error(err))


Promise.all([aPromise,bPromise]).then((res)=>{
    console.log(res[0]);
    console.log(res[1]);
})
Promise.race([aPromise,bPromise]).then((res)=>{
    console.log(res[0]);
    console.log(res[1]);
})
Promise.allSettled([aPromise,bPromise]).then((res)=>{
    console.log(res[0]);
    console.log(res[1]);
})

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    greet() {
        console.log(`Hi! My name is ${this._name}`);
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age); 
    }

    study() {
        console.log(`${this._name} is studying.`);
    }
}

const person = new Person("Mr", 24);
console.log(person);      
person.greet();           

const student = new Student("Azeem", 20);
student.greet();          
student.study();          
