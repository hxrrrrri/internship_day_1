console.log("welcome");

let value = 6;
let a = value + 5;
{
    let value = 7;
    console.log(value);
    console.log("Inside block , value is "+value+".");
}
console.log(value)
console.log(value+value);
console.log("Outside block , value is "+value+".");