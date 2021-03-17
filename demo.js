let person={
    name:'cvr',
    address:{ street :'mangalpally',loc:'vastunagar'},
    phone:1235
};
let {name,phone}=person;
let {name:user}=person;
console.log(name+" "+phone);
console.log(user);
let {k:Ab='cd'}=person;
console.log(Ab);
let {address:{street:abc}}=person;
console.log(abc);