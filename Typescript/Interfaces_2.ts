
interface myFuncInterface {
    (s1: string, s2: string, s3: string): Array<string>;
}

var myFunc: myFuncInterface = function (s1, s2, s3) {
    return [s1, s2, s3];
}

var myFuncUpper: myFuncInterface = function (s1, s2, s3) {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
}

console.log(myFunc('Test1', 'Test2', 'Test3'));
console.log(myFuncUpper('Test1', 'Test2', 'Test3'));

/*
 
 function myFync(s1: string, s2: string, s3: string): Array {
 return [];
 }

 */