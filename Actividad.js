
function fibonacci(n){
    if(n == 0){
        return n;
    }
    else if (n == 1){
        return n;
    }
    else{
        var a = fibonacci(n-1) + fibonacci(n-2);
    }
    
    return a;
}

console.log(fibonacci(9));

