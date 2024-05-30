
const imagem_humano = document.querySelector('.imagem-humano')
const imagem_maquina = document.querySelector('.imagem-maquina')
const containerButton = document.querySelector('.section-button')
const containerResultado = document.querySelector('.container-resultado')
const textResultado = document.querySelector('.resultado-titulo')
const placarHumano = document.querySelector('.container-humano h2')
const placarMaquina = document.querySelector('.container-maquina h2')
const audioMov = new Audio('./som/inicio.mp3')
const audioVitoria = new Audio('./som/congratulation.mp3')
const audioDerrota = new Audio('./som/game-over.mp3')
const audioEmpate = new Audio('./som/fiasco.mp3')
audioDerrota.volume = 0.1
audioVitoria.volume = 0.2
audioEmpate.volume = 0.2

let pontosMaquina = 0
let pontosHumano = 0


const jogadaHumana = escolha => {

    containerButton.style.pointerEvents = 'none'
    const jogadaMaquina = array => {
        let escolha = array[Math.floor(Math.random() * array.length)]
        return escolha
    }

    const escolhaMaquina = jogadaMaquina(['paper', 'rock', 'scissors'])

    const mostrarAnimacao = (elementoHumano, elementoMaquina) => {
        audioMov.play()
        audioMov.volume = 0.2
        elementoHumano.setAttribute('src', './assets/Human_Animation/up.png')
        elementoMaquina.setAttribute('src', './assets/Machine_Animation/up.png')

        setTimeout(() => {
            elementoHumano.setAttribute('src', './assets/Human_Animation/down.png')

            elementoMaquina.setAttribute('src', './assets/Machine_Animation/down.png')
        }, 500)

    }


    const repetir = (totalRepicoes, intervalo) => {
        let repetir = 0

        function executar() {
            mostrarAnimacao(imagem_humano, imagem_maquina);
            repetir++

            if (repetir < totalRepicoes) {
                setTimeout(executar, intervalo)
            }
            else {
                Timeout()
            }
        }
        executar()
    }
    repetir(3, 1000)


    const Timeout = () => {
        setTimeout(() => {
            iniciarJogo(escolha, escolhaMaquina)
        }, 1000)

        setTimeout(() => {
            containerButton.style.display = 'none'
        }, 1500)

        setTimeout(() => {
            containerResultado.style.display = 'flex'
        }, 1500)

        setTimeout(() => {
            imagem_humano.setAttribute('src', `./assets/Human_Animation/${escolha}.png`)
            imagem_maquina.setAttribute('src', `./assets/Machine_Animation/${escolhaMaquina}.png`)
        }, 1000)
    }

}

const iniciarJogo = (escolhaHumana, escolhaMaquina) => {
    audioMov.pause()

    if (escolhaHumana === escolhaMaquina) {
        textResultado.innerHTML = 'Deu Empate!'
        audioEmpate.play()


    }

    else if (escolhaHumana === 'paper' && escolhaMaquina === 'rock' || escolhaHumana === 'rock' && escolhaMaquina === 'scissors' || escolhaHumana === 'scissors' && escolhaMaquina === 'paper') {
        pontosHumano++
        placarHumano.innerHTML = pontosHumano
        textResultado.innerHTML = 'Você Ganhou!'
        audioVitoria.play()

    }
    else {
        pontosMaquina++
        placarMaquina.innerHTML = pontosMaquina
        textResultado.innerHTML = 'Você Perdeu!'
        audioDerrota.play()
    }

}

const proximaJogada = () => {
    containerButton.style.pointerEvents = ''
    imagem_humano.setAttribute('src', './assets/screen_initial/human_Arm.png')
    imagem_maquina.setAttribute('src', './assets/screen_initial/AI Arm.png')
    containerButton.style.display = 'flex'
    containerResultado.style.display = 'none'
}

const resetarPontos = () => {
    containerButton.style.pointerEvents = ''
    imagem_humano.setAttribute('src', './assets/screen_initial/human_Arm.png')
    imagem_maquina.setAttribute('src', './assets/screen_initial/AI Arm.png')
    pontosHumano = 0
    pontosMaquina = 0
    placarHumano.innerHTML = '0'
    placarMaquina.innerHTML = '0'
    containerButton.style.display = 'flex'
    containerResultado.style.display = 'none'
}
