//callbacks -> functions passed to other functions as parameters and call that function

//syntax 
// function firstFunction(parameter, callback){
//     //do stuff
//     callback();
// }

//promises get rid of callbacks
// firstFunction(para, function(){
//     secondFunction(para, function(){
//         thirdFunction(para, function(){

//         })
//     })
// });


//promises -> Has 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve('Yes! Resolved the promise');
    }
    else{
        reject('No, Reject the promise');
    }
});

console.log(myPromise);

 //Thenables
 myPromise.then(value => value + 1)
 .then(newValue => console.log(newValue))
 .catch(err => console.error(err));

//Settimeout
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My next promise is resolved')
    }, 3000)
});

myNextPromise.then(value => console.log(value));

myPromise.then(value => console.log(value));

 //fetch API -> returns a promise
const users = fetch('https://jsonplaceholder.typicode.com/users');

// pending state of a promise
//console.log(users) //promise pending

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    //console.log(res);
   return res.json()
})
.then(data => {
    //console.log(data)
    data.forEach(user => {
        console.log(user);
    })
});

//async/ await -> avoid thenables

const myUsers ={
    userList: []
}

const myCoolFunction = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    return jsonUserData;
}

myCoolFunction();
   

const anotherFunc = async () => {
    const data = await myCoolFunction();
    console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);






































































































































































