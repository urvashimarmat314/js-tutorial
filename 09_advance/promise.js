 const promiseone=new Promise(function(resolve,reject){
    // do an async task
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    }, 1000);
 })
 promiseone.then(function(){
    console.log("promise is consumed");
 })
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async 2 is completed ')
        resolve();
    },1000)
 }).then(function(){
   console.log("async 2 is resolved");
 })

 const promisethree=new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve({username:"chai",email:"chai@ecxample.com"})
   },1000)
 })
 promisethree.then(function(user){
   console.log(user);
 })