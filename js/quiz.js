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
    let questoes_embaralhadas = questoes.sort(()=> {
        return Math.random() - 0.5
    })

    questoes_embaralhadas.forEach(questao=>{
        const div_questao = document.createElement('div')
        div_questao.classList.add('questao')

        const p_texto = document.createElement('p')
        p_texto.textContent = questao.title

        div_questao.appendChild(p_texto)

        let alternativas_embaralhadas = questao.alternativas.sort(()=> {
            return Math.random() - 0.5
        })

        alternativas_embaralhadas.forEach(alternativa=>{
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

    const inputSelecionados = document.querySelectorAll('input:checked')
    inputSelecionados.forEach((input)=> {
        pontos += Number(input.value) 
        let class_input = input.value == "0"? "erro": "hulk"
        input.parentElement.parentElement.classList.add(class_input)
    })
    
    new alertUser(`Você marcou: ${pontos} pontos.`, "certo")

}

   class alertUser {
  constructor(text, cssClass) {
    this.text = text;
    this.cssClass = cssClass;
    this.father = document.querySelector(".spanAlerts");
    this.element = this.contructItself();
    this.addElementToDoc();
    const destruct = () => {
        this.destructItself();
        setTimeout(()=>{
            window.removeEventListener("click", destruct)
        }, 100)
    }
    setTimeout(()=>{
        window.addEventListener("click", destruct)
    }, 1000)
  }
  contructItself() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = this.text;
    div.classList.add("alertContainer");
    div.classList.add(this.cssClass);
    div.appendChild(p);
    return div;
  }
  addElementToDoc() {
    this.father.appendChild(this.element);
  }
  destructItself() {
    this.father.removeChild(this.element);
  }
}