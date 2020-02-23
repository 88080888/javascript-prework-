function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}
{
const playGame = function(playerInput) {
	clearMessages();

	const getMoveName = function(argMoveId) {
		if(argMoveId == 1){
		return 'kamień';
		} else if(argMoveId==2){
			return 'papier';
		} else if(argMoveId==3){
			return 'nozyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	}

	const displayResult = function(argComputerMove,argPlayerMove) {
		printMessage('Komputer zagrał: ' + argComputerMove + '. Ty zagrałeś: ' + argPlayerMove);
		if( argComputerMove == 'kamień' && argPlayerMove == 'papier' ||argComputerMove == 'nozyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
			printMessage('Ty wygrywasz!');
		} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień' ||argComputerMove == 'kamień' && argPlayerMove == 'nozyce' || argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
			printMessage('Przegrałeś!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier' ||argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'nozyce' && argPlayerMove == 'nozyce') {
			printMessage('Remis!');
		} else {
			printMessage('Wprowadziłeś błędne dane!');
		}
	}
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	const argComputerMove = getMoveName(randomNumber);
	const argPlayerMove = getMoveName(playerInput);
	displayResult(argComputerMove,argPlayerMove);
}

document.getElementById('PlayRock').addEventListener('click', function() {
	playGame(1);
  });
  document.getElementById('PlayPaper').addEventListener('click', function() {
	playGame(2);
  });
  document.getElementById('PlayScissors').addEventListener('click', function() {
	playGame(3);
  });
}