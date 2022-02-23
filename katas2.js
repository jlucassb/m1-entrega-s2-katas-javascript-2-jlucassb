// comece a criar a sua função add na linha abaixo
function add(a, b){
    return a + b;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
//console.log(add(4, 3))

// comece a criar a sua função multiply na linha abaixo
function multiply(a ,b){
    let retorno = 0
    for(let i = 1; i <= a; i++){
        retorno = add(b, retorno)
    }
    return retorno
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
//console.log(multiply(4, 3))

// comece a criar a sua função power na linha abaixo
function power(a, b){
    let retorno = 1
    for(let i = 1; i <= b; i++){
        retorno = multiply(a, retorno)
    }
    return retorno
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
//console.log(power(4, 3))

// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    let retorno = 1
    for(let i = a; i >= 1; i--){
        retorno = multiply(retorno, i)
    }
    return retorno
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
//console.log(factorial(5))

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(a){
    let retorno = []
    for(let i = 0; i <= a; i++){
        retorno = add(i, a - 1)
    }
    return retorno
}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
//console.log(fibonacci(7))