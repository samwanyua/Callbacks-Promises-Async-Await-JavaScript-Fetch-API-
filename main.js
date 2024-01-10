//Retrieving user data
const getAllUserEmails = async () => {
   
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    //console.log(jsonUserData);

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    // console.log(userEmailArray);
    
    //post to webpage
    postToWebPage(userEmailArray);

}


const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();