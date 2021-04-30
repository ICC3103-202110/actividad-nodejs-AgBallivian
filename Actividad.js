
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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Ingresa un número: ', n => {
    console.log(`F( ${n} ) = ${fibonacci(n)}`);
    readline.close();
});

//console.log(fibonacci(9));

