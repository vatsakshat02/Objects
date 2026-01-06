//object literals
let user = {
    name: 'akshat',
    age: 21,
    email: 'abc@gmail.com',
    blogs: ['hello','akshat',],
    LogBlogs: function(){  //LogBlogs() it is the same thing 
        console.log(this.blogs);
        console.log('user has written many blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.name);
user.LogBlogs();

// this is a keyword of the window function that if you place your this in an object literal it will help to
// point out all the key value pair in the user object 

//normal function set the value of this keyword to the object that invoked that method but in the case of arrow
//function the value of this keyword would be the same as it was when arrow function was invoked

//array of object is creating an array such that it has objects in it
// const obj = [
//     {title: 'yo yo ', LastName: 'Aujla'},
//     {title: 'crazy', LastName: 'Vats'}
// ]

//you can access them using obj.title,obj.LastName

console.log(Math) //for mathematical operations we have math object
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area)); //return integer less than or equal to the number
console.log(Math.trunc(area)); //trunk remove the number after decimal 
console.log(Math.ceil(area)); //maximises the value turn 7 into 8

//generate random numbers
console.log(Math.round(Math.random()*100));

//primitive type are stored in stack and reference type are stored in heap
//when we store in heap it created a pointer to the object in the stack

//MAP functions
const arr = [1,2,3,4,5]

//to double it
function double(x){
    return x*2;
}
function binary(x){
    return x.toString(2);  //can be writtena s const output = arr.map(x) => x.toString(2)
}
const output = arr.map(binary);
console.log(output);

//FILter
const fil = [5,1,3,2,6];

function isODD(x){
    return x % 2 === 0;
}

const dir = fil.filter(isODD);
console.log(dir);

//Reduce : used when you have to use all the values of array and compute them to return a single value 
const red = fil.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(red);


//to find the maximum number
const max = fil.reduce(function(acc,curr){
    if(acc<curr){
        acc = curr;
    }
    return acc;
},0)

console.log(max);

const exam = [
    {firstname:'akshat',lastname: 'vats', age:22},
    {firstname:'dikshant',lastname: 'vats', age:28},
    {firstname:'dev',lastname: 'malik', age:32},
    {firstname:'bindra',lastname: 'raghav', age:22}
];

const name = exam.map(x => x.firstname + " " + x.lastname);
console.log(name);

//to find the age 
const ages = exam.reduce(function(acc,curr){
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age];
        }
        else{
            acc[curr.age] = 1;
        }
        return acc;
},{})
console.log(ages);



const first = exam.filter((x)=> x.age < 30).map((x) => x.firstname);
console.log(first);

//Hoisting in javaScript
//hoisting is where you can access the variables and functions even before you initialised it
getName();
console.log(x);

var x = 7;
function getName(){
    console.log('welcome to Zeekuworld')
}

//above is hoisting we are accessing the function and variable even before initialising them
//in Javascript basically there are two phases 1st is memory allocation and second is execution so in the memory
//allocation phase it assigns memory to all the variables and functions thats why in execution phase it is able
//to perform hoisting [doesnt work on arrow functions as they behave like variables in memory phase]

//if you dont initialise a variable it will show not defined which means it is not in the memory space
//whereas if you initialise it, it will show undefined that it is in the memory dk its value yet


//we have call stack in java so the first item to get stored is global execution context (our window function)
//after that when a function is invoked its function execution context is pushed onto the stack and removed 
//when it has performed his method so now you may wonder what is FEC (Function Execution Context)
//just like gec where memory allocation and execution phase occur here also these two phases occur in memory and 
//it is pushed on the call stack and it will stay there until its process is completed then it will be popped off

//and after the code is executed this global execution context is popped off and the call stack is free

var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}