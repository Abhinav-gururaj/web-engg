class Sample{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    display(){
        return `name=${this.name},age=${this.age},email=${this.email}`;
    }
}
class S1 extends Sample{
    constructor(name,age,email,id){
        super(name,age,email);
        this.id=id;
    }
}
let obj=new S1('abc',23,'12@','1234');
console.log(obj.display());
console.log(obj);