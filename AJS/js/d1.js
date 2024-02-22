//Sychronous JS

console.log('1');
console.log('2');
console.log('3');

//Asychronous JS

console.log('First');
//set timeout for 2s
setTimeout(()=> console.log('second'),2000);
console.log('Third');

//callback
let production = () =>{

  setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
        console.log("choose and Added")
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
            console.log("Ice cream placed on ")
            setTimeout(()=>{
              console.log("used as toppings")
              setTimeout(()=>{
                console.log("serve Ice cream")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },1000)

};
//console.log(production());

//Promises
//3 states : pending,Fulfilled,Rejected

//fulfilled/rejected
const myPromise= new Promise ((resolve,reject)=>{
    const error=false;
     if(!error)
    //if(error)
    {
        resolve("Yes! Resolved the promise");
    }
    else
    {
        reject("Yes! Rejected the promise");
    }
});

console.log(myPromise);

myPromise.then(val =>{
    console.log(val);
})
.then(newValue => console.log(newValue));

myPromise.then(val =>{
    return val;
})
.then(newValue => console.log(newValue));

//pending
const users=fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
    console.log(response);
    console.log(response.json());
});
console.log(users);

const users1=fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
    return response.json();
}).then(user=>{
    console.log(user);
    user.forEach(element => {
        console.log(element);
    });
});
console.log(users1);

//Async---Await
const myUser={
    UserList:[]
}
const user1 = async()=>{
    const resp=await fetch("https://jsonplaceholder.typicode.com/users");
    const userData=await resp.json();
    //console.log(userData);
    return userData;
};

//user1();

const anotherFunc= async() =>{
     const data= await user1();
     myUser.UserList= data;
     console.log(myUser);
     return data;
}
anotherFunc();
console.log(myUser);

//detailing about fetch

const getDadJoke = async() =>{
    const resp=await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers: {
            //Accept: "text/plain"
            Accept: "application/json"
        }
    }) 
    //const jsonJokeData=await resp.text();
    const jsonJokeData=await resp.json();
    console.log(jsonJokeData.joke);
}

getDadJoke();


const jokeObject={
    id:'AS579nHFta',
    joke: 'Its a joke'
}

const postDadJoke = async(jokeObj) =>{
    const resp=await fetch("https://httpbin.org/post",{
        method: "POST",
        headers: {
            "content-Type":"application/json"
        },
        body: JSON.stringify(jokeObj)
    }) 
    const responseData=await resp.json();
    console.log(responseData);
    console.log(responseData.headers);
}
postDadJoke(jokeObject);

















