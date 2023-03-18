const levelForm = document.getElementById('levelForm');
levelForm.addEventListener('submit', play);

//Per disegnare la cella

function drawSquare(content, squareNumbers) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.style.width = `calc(100% / ${squareNumbers})`;
	square.style.height = square.style.width;
	square.innerHTML = content;
	return square;
}

// Per generare l'array delle bombe
function generateBombs(bombNum, numSquares) {
	const bombs = [];
	while (bombs.length <= bombNum) {
		const bomb = getRndNumber(i, numSquares);
		if (!bombs.includes(bomb)) {
			bombs.push(bomb);
		}
	}
}

function play(e) {
	e.preventDefault();
	const playground = document.getElementById('playground');
	playground.innerHTML = '';
	const NUM_BOMBS = 16;

	//Prendo il ilvello

	const level = document.getElementById('level').value;
	console.log(level);

	//Imposto numero celle per livello
	let squareNumbers;

	switch (level) {
		case 'easy':
			squareNumbers = 100;
			break;
		case 'medium':
			squareNumbers = 81;
			break;
		case 'hard':
			squareNumbers = 49;
			break;
	}
	console.log(squareNumbers);

	//Numero di celle per lato
	let squarePerRow = Math.sqrt(squareNumbers);
	console.log(squarePerRow);

	//Ciclo per numero celle & generazione prima cella

	for (let i = 1; i <= squareNumbers; i++) {
		const square = drawSquare(i, squarePerRow);
		square.addEventListener('click', function () {
			square.classList.add('safe');
		});
		playground.appendChild(square);
	}
}
