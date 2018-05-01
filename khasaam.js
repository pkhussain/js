"use strict"
let promise= new Promise(function(resolve,reject)
{
    //console.log(resolve);
    //console.log(reject);
    
    setTimeout(() =>resolve('Done Parvez Ji'), 1000);
    //setTimeout(() => reject(new Error("Parvez There is error")), 1000);
}
);

promise.then(function(result)
{
    console.log('Promise result is :' + result);
},
function(error){
    console.log('Promise Error is :'+ error);
}

)

console.log('***************Way two to catch**************');

let promise1= new Promise(function(resolve,reject)
{
    //console.log(resolve);
    //console.log(reject);
    
    //setTimeout(() =>resolve('Done Parvez Ji'), 1000);
    setTimeout(() => reject(new Error("Parvez There is error")), 1000);
}
);
promise1.catch(console.log)



// let promiseerr = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });



  let promise2 = new Promise(function(resolve, reject) {
    resolve(123);
  
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  });

  //-----------------------------

 let json = "{ bad json }";

try {

  //let user = JSON.parse(json); // <-- when an error occurs...
 // console.log(user.name ); // doesn't work
 GYM;

} catch (e) {
  // ...the execution jumps here
  console.log( "CATCH :Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( "CATCH :" + e.name );
  console.log( "CATCH :" + e.message );
}