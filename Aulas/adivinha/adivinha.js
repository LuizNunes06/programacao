document.write("<h1>Adivinhe o número que eu pensei!</h1>")


//Gera um número aleatório entre 1 e 10
const numero = Math.floor(Math.random() * 10) + 1
let chute = 0
const totalTentativas = 3
let tentativas = 1
while (numero !== chute && tentativas <= totalTentativas) {
    chute = Number(prompt(`Tentativa ${tentativas}/${totalTentativas}: `))
    
    if (numero === chute) document.write("<br/>Párabens!")
    else if (numero > chute) alert ("O número é maior!")
    else alert("O número é menor!")

    tentativas += 1
}    

    document.write("<br/>Número pensado: " + numero)
