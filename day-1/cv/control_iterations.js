console.log("STATEMENTS\n----------");

let a=5;
let b=9;

if(!(a>b)){
    console.log(`${a} is less than ${b}`);
}
else{
    console.log(`${b} is less than ${a}`);
}


for(let i=1;i<11;i++){
    console.log(i)
}

let i=1;
while(i<11){
    console.log(i)
    i++;
}

i=1;
do{
    console.log(i)
    i++;
}while(i<11);