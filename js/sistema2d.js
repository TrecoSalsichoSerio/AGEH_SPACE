function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}

// define a posição inicial para cada planeta
function setPlanetPositions() {
  const planets = document.querySelectorAll('.mercurio, .venus, .terra, .lua, .marte, .jupter, .saturno, .urano, .netuno, .prutaokk');
  
  planets.forEach((planet, index) => {
    // ângulo inicial aleatório
    const randomAngle = Math.random() * 360;

    // Define a distância com base na ordem dos planetas
    const distance = (index + 1) * 2; // Aumenta a distância com base no índice

    // Define a posição inicial
    planet.style.transform = `rotate(${randomAngle}deg) translateX(${distance}em)`;

    // Adiciona o evento de clique para redirecionar
    planet.addEventListener('click', () => {
      const planetName = planet.getAttribute('data-planet');
      console.log('Clicked on:', planetName);
      // Caminho correto para redirecionar
      window.location.href = `../html/planetas/${planetName}.html`;
    });
  });
}

// cria as estrelas
createStars();

// define a posição inicial dos planetas
setPlanetPositions();
