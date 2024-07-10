let names = ["ARUN","MALU","JOSE"];
console.log(names[1]);
console.log('The length of the list is',names.length)
function pusher(){
    let name="rahul"
    names.push(name)
    console.log(names)
}
pusher();

function printer(){
    console.log(names)
}
function shifter(name){
    names.unshift(name);
}
shifter("JOSE");
pusher();

let person={
    name:"hari",
    age:20,

    
}

let persons=[
    {

        name:"hari",
        age:20,


    },
    {
        name:"biju",
        age:40,
    }
];

console.log(person)
console.log(persons)
console.log(persons[1].name);