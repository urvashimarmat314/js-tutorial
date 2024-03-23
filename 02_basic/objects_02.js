const regularUser={
    email:"some@gamil.com",
    fullname:{
      userfullname:{
        firstname:"urvashi",
        lastname:"marmat"
      }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1[1],...obj2};
// console.log(obj3);


const users=[
    {
        id:1,
        email:"urvashi@gmail.com"
    },
    {
        id:1,
        email:"urvashi@gmail.com"
    },
    {
        id:1,
        email:"urvashi@gmail.com"
    },
]

users[1].email


const course={
    courseName:"javascript",
    courseInstrutor:"me",
    price:"1000"
}
course.courseInstrutor

const {courseInstrutor:instrutor}=course

console.log(instrutor)

const navbar=()=>{

}
