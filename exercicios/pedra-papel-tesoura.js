function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const choiceRNG = getRndInteger(0, 2);

//pedra = 0 papel = 1 tesoura = 2

if (process.argv[2] === "Pedra") {
    if(choiceRNG === 0) {
        console.log("Deu empate, pasero");
    }
    if(choiceRNG === 1) {
        console.log('Vish, perdemo')
    }
    if(choiceRNG === 2) {
        console.log('toma toma gap')
    }
}

if (process.argv[2] === "Papel") {
    if(choiceRNG === 0) {
        console.log("toma toma gap");
    }
    if(choiceRNG === 1) {
        console.log('Deu empate, pasero')
    }
    if(choiceRNG === 2) {
        console.log('Vish, perdemo')
    }
}

if (process.argv[2] === "Tesoura") {
    if(choiceRNG === 0) {
        console.log("Vish, perdemo");
    }
    if(choiceRNG === 1) {
        console.log('toma toma gap')
    }
    if(choiceRNG === 2) {
        console.log('Deu empate, pasero')
    }}
