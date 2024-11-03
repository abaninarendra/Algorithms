function findgcd(a: number, b: number): number{
    while(b!==0){
        const remainder=a%b
        a=b
        b=remainder
    }
    return a;
}

const result=findgcd(48,10);
console.log(`GCD is ${result}`)