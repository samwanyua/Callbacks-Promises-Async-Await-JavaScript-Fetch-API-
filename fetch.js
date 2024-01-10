const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    
    });
    const jokeData = await response.json();
    console.log(jokeData)
}
getDadJoke()

//to post data
const jokeObject = {
    id: 'DIeFtkVvHlb', joke: "Why do valley girls hang out in odd numbered groups? Because they can't even."
    };
const postData = async (jokeObject) => {
    const response = await fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify(jokeObject)
    
    });
    const jokeResponse = await response.json();
    console.log(jokeResponse);
}
postData(jokeObject)

//Retrieving data with URL parameters
const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`); //'?'  is where the first parameters start. '&' is to chain parameters
    const jokeResponse = await response.json();
    
    console.log(jokeResponse.value);
}
requestJoke("Bruce", "Lee");

//abstract into funtions
const getDataFromForm = () => {
    const requestObject = {
        fName: 'Bruce',
        lName: 'Lee',
        categories: ["nerdy"]

    };
    return requestObject;
}

const buildRequestUrl = (requestData) => {
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJokes = async (url) => {
    const response = await fetch(url); 
    const jokeResponse = await response.json();
    
    const joke = jokeResponse.value
    console.log(joke);
}
requestJokes("Bruce", "Lee");
































