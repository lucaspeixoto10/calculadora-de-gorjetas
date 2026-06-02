let conta = 0
let pessoas = 0
let porcentagem = 0


const contaInput = document.querySelector("#conta")

contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)

    calcular()
}