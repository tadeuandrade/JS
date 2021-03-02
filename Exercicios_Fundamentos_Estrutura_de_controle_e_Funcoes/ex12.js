factorial = (n) => {
    let mult = 1;
    for (let i = n; i > 0; i--) {
        mult *= n;
        n--;
    }
    return mult;
}

console.log(factorial(3));