const arr = ["savita", "anglina", "noel" ];

const ans = arr.filter((n) => {
//const ans = arr.filter(function (n) {
    if(n.startsWith("s")){
        return true;
    } else {
        return false;
    }
});

console.log(ans);