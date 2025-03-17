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
    'ponto', 'saber', 'teoria', 'urso', 'vivo', 'xadrez', 'yoga', 'zap', 'arrumar', 'brincadeira',
    // Novas palavras adicionadas:
    'leão', 'raposa', 'coruja', 'lontra', 'pavão', 'touro', 'cavalo', 'canguru', 'rinoceronte', 'camaleão', 
    'lêmure', 'flamingo', 'panda', 'papagaio', 'avestruz', 'dromedário', 'águia', 'arara', 'caranguejo', 
    'tartaruga', 'salamandra', 'morcego', 'jacutinga', 'guaxinim', 'tamanduá', 'tatu', 'porco-espinho', 
    'pelicano', 'canário', 'grilo', 'borboleta', 'louva-a-deus', 'escorpião', 'golfinho', 'tubarão', 'orca', 
    'estrela-do-mar', 'lobo-marinho', 'pinguim', 'árvore', 'arbusto', 'sequoia', 'carvalho', 'pinheiro', 
    'cedro', 'ipê', 'baobá', 'floresta', 'savana', 'tundra', 'pradaria', 'desfiladeiro', 'caverna', 'vulcão', 
    'colina', 'penhasco', 'cachoeira', 'lagoa', 'enseada', 'manguezal', 'pântano', 'dunas', 'geyser', 'coral', 
    'baía', 'arquipélago', 'península', 'ilhota', 'correnteza', 'nevoeiro', 'arco-íris', 'relâmpago', 'tempestade', 
    'orvalho', 'garoa', 'neve', 'gelo', 'avalanche', 'granizo', 'cadeira', 'mesa', 'sofá', 'cama', 'armário', 
    'guarda-roupa', 'prateleira', 'escrivaninha', 'relógio', 'espelho', 'luminária', 'cortina', 'tapete', 'cobertor', 
    'toalha', 'almofada', 'abajur', 'lustre', 'chuveiro', 'torneira', 'panela', 'frigideira', 'talher', 'prato', 
    'copo', 'tigela', 'garrafa', 'jarra', 'balde', 'balança', 'liquidificador', 'aspirador', 'ventilador', 'aquecedor', 
    'geladeira', 'fogão', 'forno', 'micro-ondas', 'lavadora', 'ferro', 'futebol', 'basquete', 'vôlei', 'handebol', 
    'tênis', 'squash', 'badminton', 'beisebol', 'softbol', 'críquete', 'hóquei', 'rugby', 'boxe', 'judô', 'taekwondo', 
    'luta livre', 'MMA', 'levantamento de peso', 'atletismo', 'maratona', 'triatlo', 'decatlo', 'pentatlo', 'salto em altura', 
    'salto em distância', 'salto com vara', 'arremesso de peso', 'arremesso de disco', 'nado sincronizado', 'pólo aquático', 
    'remo', 'surfe', 'skate', 'escalada', 'ciclismo', 'patinação', 'esqui', 'snowboard', 'computador', 'celular', 'tablet', 
    'smartwatch', 'drone', 'impressora', 'scanner', 'câmera', 'projetor', 'monitor', 'teclado', 'mouse', 'joystick', 
    'headset', 'microfone', 'alto-falante', 'amplificador', 'processador', 'placa-mãe', 'memória', 'HD', 'SSD', 'gabinete', 
    'fonte', 'cooler', 'roteador', 'modem', 'switch', 'servidor', 'firewall', 'antivírus', 'software', 'hardware', 'aplicativo', 
    'algoritmo', 'robótica', 'IA', 'machine learning', 'deep learning', 'automação', 'engenheiro', 'médico', 'professor', 
    'advogado', 'arquiteto', 'designer', 'programador', 'analista', 'enfermeiro', 'veterinário', 'piloto', 'astronauta', 
    'mecânico', 'eletricista', 'encanador', 'pedreiro', 'carpinteiro', 'pintor', 'marceneiro', 'bombeiro', 'policial', 
    'jornalista', 'escritor', 'artista', 'músico', 'dançarino', 'diretor', 'cinegrafista', 'fotógrafo', 'psicólogo', 
    'terapeuta', 'contador', 'economista', 'administrador', 'publicitário', 'chef', 'agricultor', 'biólogo', 'químico', 
    'físico', 'cidade', 'vila', 'metrópole', 'bairro', 'avenida', 'rua', 'beco', 'praça', 'parque', 'rodovia', 'aeroporto', 
    'estação', 'porto', 'cais', 'marina', 'mercado', 'feira', 'shopping', 'cinema', 'teatro', 'estádio', 'ginásio', 
    'museu', 'galeria', 'biblioteca', 'escola', 'faculdade', 'universidade', 'hospital', 'clínica', 'farmácia', 'igreja', 
    'templo', 'mesquita', 'sinagoga', 'castelo', 'palácio', 'mansão', 'torre', 'música', 'pintura', 'escultura', 'dança', 
    'poesia', 'romance', 'história', 'geografia', 'matemática', 'física', 'química', 'biologia', 'filosofia', 'sociologia', 
    'psicologia', 'economia', 'política', 'religião', 'cultura', 'tradição', 'festival', 'festa', 'celebração', 'feriado', 
    'aniversário', 'casamento', 'nascimento', 'funeral', 'viagem', 'turismo', 'aventura', 'descoberta', 'exploração', 
    'criatividade', 'inovação', 'progresso', 'futuro', 'memória', 'sonho', 'fantasia', 'realidade', 'ficção'
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
