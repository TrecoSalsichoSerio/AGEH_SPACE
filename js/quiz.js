// MONTAGEM DAS QUESTOES
const questoes = [
    {
        title: "Qual o planeta mais distante do Sol?",
        alternativas: [
            {
                name: "Plutão",
                value: "0"
            },
            {
                name: "Vênus",
                value: "0"
            },
            {
                name: "Marte",
                value: "0"
            },
            {
                name: "Netuno",
                value: "1"
            },  
        ]
    },
    {
        title: "Qual planeta foi rebaixado a anão?",
        alternativas: [
            {
                name: "Plutão",
                value: "1"
            },
            {
                name: "Saturno",
                value: "0"
            },
            { 
                name: "Jupter",
                value: "0"
            },
            {
                name: " Terra",
                value: "0"
            },  
        ]
    },
    {
        title: "Qual a temperatura aproximada da superfície do Sol?",
        alternativas: [
            {
                name: "6700 °C",
                value: "0"
            },
            {
                name: "9800 °C",
                value: "0"
            },
            {
                name: "5500 °C",
                value: "1"
            },
            {
                name: "2100 °C",
                value: "0"
            },  
        ]
    },
    {
        title: "Qual o menor planeta do noso sistema solar?",
        alternativas: [
            {
                name: "Urano",
                value: "0"
            },
            {
                name: "Venus",
                value: "0"
            },
            {
                name: "Mercúrio",
                value: "1"
            },
            {
                name: "Marte",
                value: "0"
            },  
        ]
    },
    {
        title: "Qual são os dois principais componentes químicos do Sol?",
        alternativas: [
            {
                name: "Hélio e Hidrogênio",
                value: "1"
            },
            {
                name: "Ferro e Níquel",
                value: "0"
            },
            {
                name: "Gás Carbônico e Hidrogênio",
                value: "0"
            },
            {
                name: "Oxigênio e Níquel",
                value: "0"
            },  
        ]
    },
    {
        title: "Quantos planetas, atualmente, tem no sistema Solar?",
        alternativas: [
            {
                name: "10",
                value: "0"
            },
            {
                name: "8",
                value: "1"
            },
            {
                name: "9",
                value: "0"
            },
            {
                name: "7",
                value: "0"
            },  
        ]
    },
    {
        title: "Quantas luas tem Saturno?",
        alternativas: [
            {
                name: "112",
                value: "0"
            },
            {
                name: "236",
                value: "0"
            },
            {
                name: "50",
                value: "0"
            },
            {
                name: "145",
                value: "1"
            },  
        ]
    },
    {
        title: "Qual o nome dos dois satélites de Marte?",
        alternativas: [
            {
                name: "Ganimedes e Fobos",
                value: "0"
            },
            {
                name: "Deimos e Ganimedes",
                value: "0"
            },
            {
                name: "Fobos e Deimos",
                value: "1"
            },
            {
                name: "Fobos e Titãn    ",
                value: "0"
            },  
        ]
    },
    {
        title: "Qual o planeta mais próximo do sol?",
        alternativas: [
            {
                name: "Mercúrio",
                value: "1"
            },
            {
                name: "Venus",
                value: "0"
            },
            {
                name: "Marte",
                value: "0"
            },
            {
                name: "Saturno",
                value: "0"
            },  
        ]
    },
    {
        title: "Qual o maior planeta do sistema solar?",
        alternativas: [
            {
                name: "Terra",
                value: "0"
            },
            {
                name: "Saturno",
                value: "0"
            },
            {
                name: "Júpter",
                value: "1"
            },
            {
                name: "Marte",
                value: "0"
            },  
        ]
    },
]


// CRIACAO DAS QUESTOES
window.addEventListener("DOMContentLoaded", ()=>{

    let contador = 1

    questoes.forEach(questao=>{
        const div_questao = document.createElement('div')
        div_questao.classList.add('questao')

        const p_texto = document.createElement('p')
        p_texto.textContent = questao.title

        div_questao.appendChild(p_texto)

        questao.alternativas.forEach(alternativa=>{
            const label = document.createElement('label')
            label.classList.add('mabel')

            const input = document.createElement('input')
            input.value = alternativa.value
            input.name = "q" + contador
            input.type = "radio"
            
            label.appendChild(input)
            label.innerHTML += " - "+alternativa.name
            
            div_questao.append(label)
        })
        
        contador ++
        document.querySelector(".quests").append(div_questao)
        console.log(div_questao)
    })








        
    document.getElementById("enviarQuiz").addEventListener("click", verificarRespostas);
})



// ORGANIZACAO DAS QUESTOES E PONTUACAO

function verificarRespostas(){
    document.querySelectorAll(".questao").forEach(div=>{
        div.classList.remove("not-selected-div")
    })
    for(let i=1; i <= document.querySelectorAll(".questao").length; i++){
        if (document.querySelector(`input[name=q${i}]:checked`)==undefined) {
            document.querySelector(`input[name=q${i}]`).parentElement.parentElement.classList.add("not-selected-div")
            setTimeout(()=>{
                alert(`Marque todas as questões - Questão número ${i}`)
            }, 100)
            return
        }
    }
    let pontos = 0;

    //vereficar pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        pontos += parseInt(q1.value);
    }

    //vereficar pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        pontos += parseInt(q2.value);
    }

    //vereficar pergunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        pontos += parseInt(q3.value);
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        pontos += parseInt(q4.value);
    }

    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5) {
        pontos += parseInt(q5.value);
    }

    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        pontos += parseInt(q6.value);
    }

    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7) {
        pontos += parseInt(q7.value);
    }

    const q8 = document.querySelector('input[name="q8"]:checked');
    if (q8) {
        pontos += parseInt(q8.value);
    }

    const q9 = document.querySelector('input[name="q9"]:checked');
    if (q9) {
        pontos += parseInt(q9.value);
    }

    const q10 = document.querySelector('input[name="q10"]:checked');
    if (q3) {
        pontos += parseInt(q10.value);
    }

    window.location.href = `../html/resultado.html?pontos=${pontos}`;
}

   