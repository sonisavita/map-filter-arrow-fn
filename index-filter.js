//filtering
//given an input array, give back all the even values from it

const arr = [1,2,3,4,5];

//to make is anonymous funcation  mostly used in js 

const ans = arr.filter((n) => {  // arrow fn
//const ans = arr.filter(function (n){    
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(ans);

//filter approach
// function filterLogic(n){
//     if(n % 2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const ans = arr.filter(filterLogic);
// console.log(ans);

//ans
// const newArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);