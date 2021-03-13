let addTwoNums = (numA,numB) =>{
    return numA + numB;
}

let multTwoNums = (numA,numB) =>{
    return numA * numB;
}
let result, expected;
let test = (message,cb)=>{
    try {
        cb();
        console.log(`✅`,message);
    } catch (error) {
        console.error(error);
        console.log(`❌`,message);
    }
}

function expect(actual){
    return {
        toEqual: function(expected){
            if(actual!==expected){
                throw new Error(`${result} is the expected value not ${expected}`);
            }
        }
    }
}

let addTwoNumsTest = ()=>{
     result = addTwoNums(1,2);
     expected = 3;
     expect(result).toEqual(3);
}
test('add 1 and 2', addTwoNumsTest);
let addTwoNumsTest2 = ()=>{
    result = addTwoNums(4,2);
    expected = 6;
    expect(result).toEqual(6);
}


test('add 4 and 2', addTwoNumsTest2);

let multTwoNumsTest = ()=>{
    result = multTwoNums(1,3);
    expected = 3;
    expect(result).toEqual(3);
}
test('mult 1 and 2', multTwoNumsTest);
let multTwoNumsTest2 = ()=>{
   result = multTwoNums(4,2);
   expected = 8;
   expect(result).toEqual(8);
}
test('mult 4 and 2', multTwoNumsTest);