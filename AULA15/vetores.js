let valores = [10, 1, 4, 6, 8, 9]

/*
for(let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

