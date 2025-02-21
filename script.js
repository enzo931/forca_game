const words = [
    'astronauta', 'bateria', 'cachorro', 'dente', 'elefante', 'foca', 'gato', 'hipopotamo', 'inseto', 'jacare',
    'kiwi', 'limao', 'macaco', 'navio', 'ocelote', 'pato', 'quati', 'rato', 'sapo', 'tigre',
    'urso', 'vaca', 'zebra', 'abacaxi', 'bola', 'caminhao', 'diamante', 'elevador', 'ferramenta', 'guitarra',
    'helicoptero', 'iphone', 'joystick', 'kinect', 'laptop', 'microfone', 'notebook', 'oculos', 'piano', 'quadro',
    'robo', 'smartphone', 'teclado', 'usb', 'videogame', 'xbox', 'youtuber', 'zumbis', 'agua', 'barco',
    'cachoeira', 'duna', 'escarpa', 'floresta', 'gruta', 'horizonte', 'ilha', 'jardim', 'lago', 'montanha',
    'nuvem', 'oceano', 'pedra', 'quebrada', 'rio', 'salto', 'tornado', 'vento', 'xaxim', 'yeti',
    'zelador', 'abismo', 'barragem', 'calor', 'deserto', 'eco', 'fogo', 'gelo', 'hidromassagem', 'inverno',
    'jose', 'kilograma', 'lava', 'madeira', 'neve', 'oceano', 'piramide', 'quente', 'rocha', 'sal',
    'terra', 'urano', 'vulcao', 'xixi', 'yoga', 'zoologico', 'apito', 'banco', 'carta', 'decimo',
    'envelope', 'fotocopia', 'guia', 'historico', 'index', 'livro', 'manual', 'notebook', 'oficina',
    'papel', 'questao', 'relatorio', 'solicitacao', 'tarefa', 'unidade', 'verificador', 'wikipedia', 'xerox',
    'yarn', 'zinc', 'alerta', 'bola', 'ciclismo', 'diverso', 'estrela', 'futebol', 'goleiro',
    'hipismo', 'ioga', 'judô', 'karate', 'luta', 'medalha', 'natação', 'olimpiadas', 'polo', 'qualidade',
    'rendimento', 'sprint', 'tacada', 'usar', 'vôlei', 'xadrez', 'yoga', 'zumba', 'aeronave', 'bateria',
    'camera', 'dança', 'ensino', 'floresta', 'golfe', 'horario', 'instalação', 'janela', 'lanterna',
    'mecanismo', 'nave', 'oficina', 'piloto', 'quadro', 'rosto', 'sistema', 'turbina', 'unidade',
    'vassoura', 'wikipedia', 'xilofone', 'youtuber', 'zelador', 'abreviação', 'bola', 'calor', 'doutor',
    'educacao', 'foco', 'garantia', 'holofote', 'identidade', 'jornal', 'kiosk', 'local', 'moderno',
    'noticias', 'oficina', 'porta', 'quadro', 'relogio', 'seguro', 'tendencia', 'universo', 'vida',
    'xandao', 'youtubers', 'zelador', 'antigo', 'brinquedo', 'cabelos', 'diva', 'empresa', 'formiga',
    'gato', 'historico', 'idealista', 'jogo', 'luvas', 'mecanismo', 'noticias', 'penteado', 'querido',
    'risco', 'sucesso', 'trendy', 'urgente', 'vagas', 'xenofobia', 'yogui', 'zap', 'auto', 'baralho',
    'carrinho', 'dividido', 'enciclopédia', 'foto', 'grito', 'historico', 'ioga', 'jardim', 'kleenex',
    'limao', 'maca', 'necessidade', 'oculos', 'poker', 'questao', 'roxo', 'saudade', 'tendencia',
    'unidade', 'viver', 'wikipedia', 'xixi', 'yoga', 'zap', 'abrir', 'cantar', 'dominar', 'ensinar',
    'floresta', 'gato', 'hora', 'iniciar', 'juntar', 'kilograma', 'lembrar', 'multiplicar', 'nome',
    'ocupar', 'pegar', 'qualidade', 'racao', 'saber', 'tarefa', 'utilizar', 'viver', 'wikipedia',
    'zelar', 'azar', 'branco', 'desafio', 'eco', 'foco', 'grafo', 'halo', 'identidade', 'jantar',
    'ponto', 'saber', 'teoria', 'urso', 'vivo', 'xadrez', 'yoga', 'zap', 'arrumar', 'brincadeira'
];

let chosenWord = words[Math.floor(Math.random() * words.length)];
let displayWord = chosenWord.split('').map(() => '_').join(' ');
let remainingAttempts = 6;
let triedLetters = [];
let gameOver = false;

const wordDisplay = document.getElementById('word-display');
const remainingAttemptsDisplay = document.getElementById('remaining-attempts');
const triedLettersDisplay = document.getElementById('tried-letters');
const resultDisplay = document.getElementById('result');
const letterInput = document.getElementById('letter-input');
const winOverlay = document.getElementById('win-overlay');
const loseOverlay = document.getElementById('lose-overlay');
const winWord = document.getElementById('win-word');
const loseWord = document.getElementById('lose-word');

function updateDisplay() {
    wordDisplay.textContent = displayWord;
    remainingAttemptsDisplay.textContent = remainingAttempts;
    triedLettersDisplay.textContent = triedLetters.join(', ');
}

function guessLetter() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';
    
    if (!letter || letter.length !== 1 || triedLetters.includes(letter)) return;

    triedLetters.push(letter);

    if (chosenWord.includes(letter)) {
        displayWord = chosenWord.split('').map((char, index) => {
            return char === letter ? letter : displayWord.split(' ')[index];
        }).join(' ');
    } else {
        remainingAttempts--;
    }

    if (remainingAttempts === 0) {
        gameOver = true;
        loseWord.textContent = chosenWord;
        loseOverlay.style.display = 'flex';
        document.getElementById('game-container').style.display = 'none';
    }

    if (!displayWord.includes('_')) {
        gameOver = true;
        winWord.textContent = chosenWord;
        winOverlay.style.display = 'flex';
        document.getElementById('game-container').style.display = 'none';
    }

    updateDisplay();
}

function restartGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayWord = chosenWord.split('').map(() => '_').join(' ');
    remainingAttempts = 6;
    triedLetters = [];
    gameOver = false;

    document.getElementById('game-container').style.display = 'block';
    winOverlay.style.display = 'none';
    loseOverlay.style.display = 'none';

    updateDisplay();
}

updateDisplay();
