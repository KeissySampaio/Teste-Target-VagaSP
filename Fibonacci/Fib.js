function isFibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === n || n === 0;
}

let numero = 16; //escolhi esse numero por ser o dia do nascimento da minha filha. estei numeros que pertence a sequencia fibonacci ex.2 
if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}