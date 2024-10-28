document.getElementById("enviarQuiz").addEventListener("click", verificarRespostas);

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

   