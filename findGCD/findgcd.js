function findgcd(a, b) {
    while (b !== 0) {
        var remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
var result = findgcd(48, 10);
console.log("GCD is ".concat(result));
