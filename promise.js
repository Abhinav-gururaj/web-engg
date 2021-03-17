function first(value){
    return value+100;
}
function second(value){
    return value*100;
}
function third(value){
    return value-10;
}
let p=new Promise((resolve,reject)=>{
    resolve(10);
});
p.then(first).then(second).then(third).then((result)=>{
    console.log(result);
});