//asynchronus basically means that you dont want to wait for a task to happen so that you can move on towards 
//the next part of the code. SO like a data request from server while it is taking time to get the data we perform
//other tasks

const posts = [
    {title: 'Post one', body:'this is post one'},
    {title: 'Post two', body:'this is post two'},
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPosts(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('error: something went wrong');
            }
        }, 2000);
    })
}


// createPosts({title: 'Post three', body:'this is post three'}).then(getPost); //here getpost is the function call of function getpost


//this code is to fetch API or data from server and convert it into json
const promise1 = fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
promise1.then(value => console.log(value));

//async/Await
async function init(){
    await createPosts({title: 'Post three', body:'this is post three'});
    getPost();
}

init();

//basically instead of using .then await straightup call the function when it is resolved 