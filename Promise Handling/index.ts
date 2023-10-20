// Promise Handling

// Create a function fetchUserProfile that returns a promise.
// Inside the promise, simulate a network delay (e.g., 2 seconds) using setTimeout.
// After the delay, resolve the promise with a user profile object if the operation is successful, or reject it with an error message if it fails.

function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = { name: "John Doe", age: 30 };
      if (true) {
        reject("Failed to fetch profile");
      } else {
        resolve(user);
      }
    }, 2000);
  });
}
console.log("Fetching User Data...");

fetchUserProfile()
  .then((success) => {
    console.log("Data Fetching Sucess", success);
  })
  .catch((error) => {
    console.log("Data Fetch Failed...", error);
  });

// console.log("Before Asynce code");

// let output = new Promise((resolve,reject)=>{
//     if (true){
//         resolve('Promise Resolved');
//     }
//     else{
//         reject("Error Something Went Wrong")
// }})
// output.then((sucess)=>{
//     console.log("Success",sucess);

// }).catch((error)=>{
//     console.log("error",error);

// })

// console.log("before Async");
// let setIntervalOutID

// setIntervalOutID = setInterval(()=>{
//     console.log("SetTimeout Async");

// },2000)
// if(true)
// {
//     clearTimeout(setIntervalOutID)
// }
// console.log("After Async");
