let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString);
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// date is a object 

// let mycreatedDate=new Date(2024,0,31,5,4,9);
// let mycreatedDate=new Date("2023-01-12");
let mycreatedDate=new Date("01-14-2023");
// console.log(mycreatedDate.toLocaleString());


let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    hour:"2-digit",
})
