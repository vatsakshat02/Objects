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

function createPosts(post, callback){ //so basically what happened here is we are taking another function called callback function as a parameter named call back
    setTimeout(() => {               // and we are calling the getposts function by passing it as an argument to callback parameter so that it doesnt delay
        posts.push(post);
        callback();
    },2000)
}



createPosts({title: 'Post three', body:'this is post three'}, getPost); //here getpost is the function call of function getpost