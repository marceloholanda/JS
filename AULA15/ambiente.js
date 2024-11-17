let num = [5 ,8 ,14]

num[3] = 6

num.push(7)

num.sort()

console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(7)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}