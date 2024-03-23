// singleton by consturtor
// object.create

// objects literals
const mySym=Symbol("key1")

const JsUser={
    name:"urvashi",
    "full name":"urvashi marmat",
    [mySym]:"mykey1",
    age:20,
    location:"urvashi@google.com",
    isLoggedIn:false,
    lastLogInDays:["monday","saturday"]
}
// console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email="urvashimarmat@gmail.com";
// Object.freeze(JsUser)
JsUser.email="uravshi@amazon.com";
console.log(JsUser)
JsUser.greetings=function(){
    console.log("Hello ");
}