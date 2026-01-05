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