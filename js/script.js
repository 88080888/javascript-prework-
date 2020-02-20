function getMoveName(argMoveId){
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

function displayResult(argComputerMove,argPlayerMove){
	printMessage('Komputer zagrał: ' + argComputerMove + '. Ty zagrałeś: ' + argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier' ||argComputerMove == 'nozyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień' ||argComputerMove == 'kamień' && argPlayerMove == 'nozyce' || argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
		printMessage('Przegrałeś!');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier' ||argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('Remis!');
	} else {
		printMessage('Wprowadziłeś błędne dane!');
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let argComputerMove = getMoveName(randomNumber);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let argPlayerMove = getMoveName(playerInput);

printMessage(displayResult(argComputerMove,argPlayerMove));

/*
console.log('Wylosowana liczba to: ' + randomNumber);
*/
/*let computerMove = 'nieznany ruch';*/



/*
if(randomNumber == 1){
	computerMove = 'kamień';
} else if (randomNumber == '2'){
	computerMove = 'papier';
} else {computerMove = 'nozyce';
}
*/
/*
printMessage('Mój ruch to: ' + computerMove);
*/

/*
console.log('Gracz wpisał: ' + playerInput);
*/
/*
let playerMove = getMoveName(playerInput);
*/
/*
if(playerInput == '1'){
	playerMove = 'kamień';
} else if (playerInput == '2'){
	playerMove = 'papier';
} else if (playerInput == '3'){
	playerMove = 'nozyce';
} else {playerMove = 'nieznany ruch';
}
*/
/*
printMessage('Twój ruch to: ' + playerMove);
*/
/*
if(computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'kamień' && playerMove == 'nozyce' || computerMove == 'nozyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nozyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nozyce' && playerMove == 'papier'){
	printMessage('Przegrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nozyce' && playerMove == 'nozyce'){
	printMessage('Remis!');
} else {printMessage('Wpisałeś złą wartość!');
}
*/

