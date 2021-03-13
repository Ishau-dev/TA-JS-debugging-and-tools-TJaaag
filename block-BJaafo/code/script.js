let fullName = (firstName,lastName) =>{
    return firstName + " "+ lastName;
}

let expected = 5;
let result =  fullName("Ishau","Oyeti");
if(result!==expected){
    throw new Error("error check the input");
}

let fullName = (firstName,lastName) =>{
    return firstName + " "+ lastName;
}

let expected = fullName("Ishau","Oyeti");
let result =  fullName("Ishau","Oyeti");
if(result!==expected){
    throw new Error("error check the input");
}


let total= (amount,taxRate)=>{
    return amount + (amount * taxRate);
}

let expected= 12;
let result = total(100,0.5);
if(result!==expected){
    throw new Error("error total");
}

let total= (amount,taxRate)=>{
    return amount + (amount * taxRate);
}

let expected= 150;
let result = total(100,0.5);
if(result!==expected){
    throw new Error("error total");
}