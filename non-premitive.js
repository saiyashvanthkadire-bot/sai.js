//object
const student={
    fullname:"Alice",
    age:19,
    cgpa:9.5,
    isPass:true,

};
console.log(student);
console.log(student.fullname);

//incrementing key value
console.log(student.age);
student["age"]=student["age"]+1;
console.log(student["age"]);