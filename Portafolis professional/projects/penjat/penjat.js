// Definim les paraules i categories
const words = [
    { 
        word: "cotxe", 
        category: "VEHICLE", 
        image: `./img/vehicle/cotxe.jpg`, 
        educationalInfo: "El cotxe és un mitjà de transport molt utilitzat per desplaçar-se d'un lloc a un altre." 
    },
    { 
        word: "moto", 
        category: "VEHICLE", 
        image: `./img/vehicle/moto.jpeg`, 
        educationalInfo: "La moto és un vehicle de dues rodes molt popular per la seva agilitat i velocitat." 
    },
    { 
        word: "furgoneta", 
        category: "VEHICLE", 
        image: `./img/vehicle/furgoneta.jpg`, 
        educationalInfo: "La furgoneta és un vehicle de càrrega utilitzat per transportar mercaderies o persones." 
    },
    { 
        word: "tren", 
        category: "VEHICLE", 
        image: `./img/vehicle/tren.webp`, 
        educationalInfo: "El tren és un mitjà de transport ferroviari que circula sobre rails." 
    },
    { 
        word: "bici", 
        category: "VEHICLE", 
        image: `./img/vehicle/bici.jpg`, 
        educationalInfo: "La bicicleta és un vehicle de dues rodes que es mou gràcies a la força humana." 
    },
    { 
        word: "metro", 
        category: "VEHICLE", 
        image: `./img/vehicle/metro.jpg`, 
        educationalInfo: "El metro és un sistema de transport urbà subterrani que connecta diferents punts de la ciutat." 
    },
    { 
        word: "vaixell", 
        category: "VEHICLE", 
        image: `./img/vehicle/vaixell.jpg`, 
        educationalInfo: "El vaixell és un mitjà de transport marítim que es desplaça sobre l'aigua." 
    },
    { 
        word: "tractor", 
        category: "VEHICLE", 
        image: `./img/vehicle/tractor.avif`, 
        educationalInfo: "El tractor és un vehicle utilitzat principalment en l'agricultura per a treballs de remolc o tracció." 
    },
    { 
        word: "camisa", 
        category: "ROBA", 
        image: `./img/roba/camisa.webp`, 
        educationalInfo: "La camisa és una peça de roba que cobreix el tors i els braços d'una persona." 
    },
    { 
        word: "samarreta", 
        category: "ROBA", 
        image: `./img/roba/samarreta.jpg`, 
        educationalInfo: "La samarreta és una peça de roba de màniga curta o llarga que es vesteix sobre el tors." 
    },
    { 
        word: "jaqueta", 
        category: "ROBA", 
        image: `./img/roba/jaqueta.jpg`, 
        educationalInfo: "La jaqueta és una peça de roba exterio que cobreix el tors i pot tenir mànigues o no." 
    },
    { 
        word: "dessuadora", 
        category: "ROBA", 
        image: `./img/roba/dessuadora.jpg`, 
        educationalInfo: "La dessuadora és una peça de roba esportiva de màniga llarga o curta, sovint amb caputxa." 
    },
    { 
        word: "jersei", 
        category: "ROBA", 
        image: `./img/roba/jersei.jpg`, 
        educationalInfo: "El jersei és una peça de roba de màniga llarga o curta, tricotada o de punt, que es posa sobre la samarreta o la camisa." 
    },
    { 
        word: "vestit", 
        category: "ROBA", 
        image: `./img/roba/vestit.jpg`, 
        educationalInfo: "El vestit és una peça de roba de dues peces o unitària que cobreix el cos de la persona." 
    },
    { 
        word: "pijama", 
        category: "ROBA", 
        image: `./img/roba/pijama.jpg`, 
        educationalInfo: "El pijama és un conjunt de roba que es fa servir per dormir, format per una camisa i uns pantalons o una samarreta i uns pantalons curts." 
    },
    { 
        word: "faldilla", 
        category: "ROBA", 
        image: `./img/roba/faldilla.jpg`, 
        educationalInfo: "La faldilla és una peça de roba femenina que cobreix la part inferior del cos, generalment de longitud variable." 
    },
    { 
        word: "pantalons", 
        category: "ROBA", 
        image: `./img/roba/pantalons.jpg`, 
        educationalInfo: "Els pantalons són una peça de roba que cobreix les cames, poden tenir diverses formes i són usats tant per homes com per dones." 
    },
    { 
        word: "armilla", 
        category: "ROBA", 
        image: `./img/roba/armilla.jpg`, 
        educationalInfo: "L'armilla és una peça de roba sense mànigues que es posa sobre la camisa o la samarreta." 
    },
    { 
        word: "malles", 
        category: "ROBA", 
        image: `./img/roba/malles.webp`, 
        educationalInfo: "Les malles són una peça de roba ajustada que cobreix les cames, usades especialment per a la pràctica d'esports." 
    },
    { 
        word: "mitjons", 
        category: "ROBA", 
        image: `./img/roba/mitjons.jpg`, 
        educationalInfo: "Els mitjons són una peça de roba que cobreix el peu i part de la cama, usats per protegir i escalfar els peus." 
    },
    { 
        word: "sabates", 
        category: "ROBA", 
        image: `./img/roba/sabates.jpg`, 
        educationalInfo: "Les sabates són un tipus de calçat que cobreix els peus i es fixa a ells principalment amb cordons o velcros." 
    },
    { 
        word: "barret", 
        category: "ROBA", 
        image: `./img/roba/barret.jpg`, 
        educationalInfo: "El barret és un complement de vestir que es posa sobre el cap i té diverses formes i funcions, des de protegir del sol fins a complementar un vestit formal." 
    },
    { 
        word: "abric", 
        category: "ROBA", 
        image: `./img/roba/abric.jpg`, 
        educationalInfo: "L'abric és una peça de roba exterior que cobreix el cos per protegir-lo del fred i la intempèrie." 
    },
    { 
        word: "vermell", 
        category: "COLOR", 
        image: `./img/color/vermell.jpg`, 
        educationalInfo: "El vermell és un color primari que es troba entre el taronja i el magenta en l'espectre de colors." 
    },
    { 
        word: "blau", 
        category: "COLOR", 
        image: `./img/color/blau.png`, 
        educationalInfo: "El blau és un color secundari que es troba entre el verd i el lila en l'espectre de colors." 
    },
    { 
        word: "verd", 
        category: "COLOR", 
        image: `./img/color/verd.jpg`, 
        educationalInfo: "El verd és un color secundari que es troba entre el groc i el blau en l'espectre de colors." 
    },
    { 
        word: "groc", 
        category: "COLOR", 
        image: `./img/color/groc.webp`, 
        educationalInfo: "El groc és un color primari que es troba entre el taronja i el verd en l'espectre de colors." 
    },
    { 
        word: "lila", 
        category: "COLOR", 
        image: `./img/color/lila.jpg`, 
        educationalInfo: "El lila és un color secundari que es troba entre el magenta i el blau en l'espectre de colors." 
    },
    { 
        word: "negre", 
        category: "COLOR", 
        image: `./img/color/negre.jpg`, 
        educationalInfo: "El negre és un color que resulta de la absorció de tots els colors de l'espectre visible." 
    },
    { 
        word: "blanc", 
        category: "COLOR", 
        image: `./img/color/blanc.png`, 
        educationalInfo: "El blanc és un color que resulta de la reflexió de tots els colors de l'espectre visible." 
    },
    { 
        word: "rosa", 
        category: "COLOR", 
        image: `./img/color/rosa.png`, 
        educationalInfo: "El rosa és un color secundari que es troba entre el vermell i el blanc en l'espectre de colors." 
    },
    { 
        word: "taronja", 
        category: "COLOR", 
        image: `./img/color/taronja.webp`, 
        educationalInfo: "El taronja és un color secundari que es troba entre el groc i el vermell en l'espectre de colors." 
    }
];

let currentWord;
let guessedLetters = [];
let wrongAttempts = 0;
let timerInterval;
let seconds = 0;

// Funció per desar l'estat del joc al localStorage
function saveGameState() {
    localStorage.setItem('hangmanGameState', JSON.stringify({
        currentWord: currentWord,
        correctLetters: guessedLetters.filter(letter => currentWord.includes(letter)),
        incorrectLetters: guessedLetters.filter(letter => !currentWord.includes(letter)),
        wrongAttempts: wrongAttempts
    }));
}

// Funció per carregar l'estat del joc des del localStorage
function loadGameState() {
    const gameStateJSON = localStorage.getItem('hangmanGameState');
    if (gameStateJSON) {
        const gameState = JSON.parse(gameStateJSON);
        currentWord = gameState.currentWord;
        guessedLetters = gameState.correctLetters.concat(gameState.incorrectLetters);
        wrongAttempts = gameState.wrongAttempts;
    } else {
        startGame();
    }
}

// Afegeix una crida a loadGameState() quan la pàgina es carregui
window.addEventListener('DOMContentLoaded', loadGameState);

// Funció per esborrar l'estat del joc del localStorage
function clearGameState() {
    localStorage.removeItem('hangmanGameState');
}

function startGame() {
    // Carrega l'estat del joc si hi ha algun
    loadGameState();
    const username = document.getElementById("username").value;
    if (!username) {
        alert("Introdueix el teu nom d'usuari.");
        return;
    }

    startTimer();

    // Reinicia el dibuix del penjat
    document.getElementById("hangman").innerHTML = '';

    // Neteja el text informatiu
    document.getElementById("info").innerHTML = '';

    // Selecciona una paraula aleatòria
    const randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord = randomWord.word.toUpperCase();

    // Mostra la categoria
    document.getElementById("category").textContent = `Categoria: ${randomWord.category}`;

    // Reinicia la llista de lletres endevinades
    guessedLetters = [];

    // Genera els botons de les lletres
    generateLetterButtons();

    // Inicialitza la màscara de la paraula
    updateWordMask();

    // Esborra les dades del joc anterior
    wrongAttempts = 0;
}

function startTimer() {
    // Reinicia els segons i mostra el temps inicial
    seconds = 0;
    updateTimer();

    // Inicia un interval per actualitzar el temps cada segon
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    // Actualitza l'element HTML del temps amb els segons actuals
    document.getElementById("timer").textContent = `Temps: ${seconds} segons`;
}

// Funció per generar els botons de les lletres
function generateLetterButtons() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const buttonContainer = document.getElementById("letter-buttons");
    buttonContainer.innerHTML = "";
    alphabet.forEach(letter => {
        const button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => selectLetter(letter));
        buttonContainer.appendChild(button);
    });
}

// Funció per seleccionar una lletra
function selectLetter(letter) {
    if (guessedLetters.includes(letter)) {
        // Si la lletra ja s'ha seleccionat, no fem res
        return;
    }

    // Verifica si s'ha guanyat o perdut el joc
    if (checkWin() || wrongAttempts === 6) {
        // Si s'ha guanyat o perdut el joc, bloqueja la selecció de lletres
        return;
    }

    // Desactiva el botó
    const letterButton = document.querySelector(`#letter-buttons button:nth-child(${letter.charCodeAt(0) - 64})`);
    letterButton.disabled = true;

    // Afegeix la lletra a la llista de lletres endevinades
    guessedLetters.push(letter);

    // Verifica si la lletra és correcta
    if (currentWord.includes(letter)) {
        updateWordMask();
        // Marca el botó com a correcte (verd)
        letterButton.classList.add('correct');
        if (checkWin()) endGame(true);
    } else {
        wrongAttempts++;
        drawHangman();
        // Marca el botó com a incorrecte (vermell)
        letterButton.classList.add('incorrect');
        if (wrongAttempts === 6) endGame(false);
    }

    // Desa l'estat actual del joc
    saveGameState();
}

// Funció per actualitzar la màscara de la paraula
function updateWordMask() {
    const wordMask = document.getElementById("word-mask");
    let maskedWord = "";
    for (const char of currentWord) {
        if (guessedLetters.includes(char)) {
            maskedWord += char + " ";
        } else {
            maskedWord += "_ ";
        }
    }
    wordMask.textContent = maskedWord.trim();
}

// Funció per dibuixar el penjat
function drawHangman() {
    const hangmanDiv = document.getElementById("hangman");

    // Dibuixa la part vertical
    const verticalLine = document.createElement("div");
    verticalLine.id = "vertical-line";
    hangmanDiv.appendChild(verticalLine);

    // Dibuixa la part horitzontal
    const horizontalLine = document.createElement("div");
    horizontalLine.id = "horizontal-line";
    hangmanDiv.appendChild(horizontalLine);



    switch (wrongAttempts) {

        case 1:
            // Dibuixa el cap
            const headDiv = document.createElement("div");
            headDiv.id = "head";
            hangmanDiv.appendChild(headDiv);
            break;
        case 2:
            // Dibuixa el cos
            const bodyDiv = document.createElement("div");
            bodyDiv.id = "body";
            hangmanDiv.appendChild(bodyDiv);
            break;
        case 3:
            // Dibuixa el braç esquerra
            const leftArmDiv = document.createElement("div");
            leftArmDiv.id = "left-arm";
            hangmanDiv.appendChild(leftArmDiv);
            break;
        case 4:
            // Dibuixa el braç dret
            const rightArmDiv = document.createElement("div");
            rightArmDiv.id = "right-arm";
            hangmanDiv.appendChild(rightArmDiv);
            break;
        case 5:
            // Dibuixa la cama esquerra
            const leftLegDiv = document.createElement("div");
            leftLegDiv.id = "left-leg";
            hangmanDiv.appendChild(leftLegDiv);
            break;
        case 6:
            // Dibuixa la cama dreta
            const rightLegDiv = document.createElement("div");
            rightLegDiv.id = "right-leg";
            hangmanDiv.appendChild(rightLegDiv);
            // Finalitza el joc
            endGame(false);
            break;
        default:
            break;
    }
}

// Funció per comprovar si s'ha guanyat el joc
function checkWin() {
    return currentWord.split("").every(letter => guessedLetters.includes(letter));
}

// Funció per finalitzar el joc
function endGame(isWinner) {
    const infoDiv = document.getElementById("info");
    if (isWinner) {
        infoDiv.innerHTML = `<p>Enhorabona! Has encertat la paraula.</p>`;
    } else {
        infoDiv.innerHTML = `<p>Has perdut. La paraula era: ${currentWord}</p>`;
    }

    // Atura el contador de temps
    clearInterval(timerInterval);

    // Mostra la imatge i la informació educativa relacionada amb la paraula
    const currentWordData = words.find(wordObj => wordObj.word.toUpperCase() === currentWord);
    if (currentWordData) {
        const image = document.createElement("img");
        image.src = currentWordData.image;
        infoDiv.appendChild(image);

        const educationalInfo = document.createElement("p");
        educationalInfo.textContent = currentWordData.educationalInfo;
        infoDiv.appendChild(educationalInfo);
    }

    // Torna a jugar
    infoDiv.innerHTML += `<button onclick="startGame()">Tornar a jugar</button>`;

    // Esborra l'estat del joc després de finalitzar
    clearGameState();
}

// Afegeix l'esdeveniment d'esborrat de dades quan es tanca la finestra
window.addEventListener('beforeunload', () => {
    // Desa l'estat del joc quan es tanca la finestra
    saveGameState();
});

// Inicia el joc quan es premi el botó
document.getElementById("start-btn").addEventListener("click", startGame);
