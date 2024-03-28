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

 const promisefour=new Promise(function(resolve,reject){
   setTimeout(function(){
      let error=true
      if(!error){
         resolve({username:"urvashi",password:"123"})
      }
      else{
         reject('ERROR:something went wrong')
      }
   },1000)
 })
 promisefour.then((user) =>{
   console.log(user);
   return user.username;
 }).then((user)=>{
   console.log(user);
 }).catch(function(error){
   console.log(error);
 }).finally(function(){
   console.log("the promise is either resolved or rejected")
 })

 const promisefive=new Promise(function(resolve,reject){
   setTimeout(function(){
      let error=true
      if(!error){
         resolve({username:"urvashi",password:"123"})
      }
      else{
         reject('ERROR:something e=wnet wrong')
      }
   },1000)
 })
 async function consumePromiseFive(){
   try{
      const response=await promisefive
   console.log(response);
   }
   catch{
      console.log(error);
   }
 }