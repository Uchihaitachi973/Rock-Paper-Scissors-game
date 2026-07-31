let wins = 0;
let losses = 0;
let ties = 0;

function playRock() {
    const RandomNumber = Math.random();
    let ComputerMove = '';


    if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
        ComputerMove = 'Rock';
    }

    else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        ComputerMove = 'Paper';
    }

    else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
        ComputerMove = 'Scissors'
    }

    let result = '';

    if (ComputerMove === 'Rock') {
        result = 'Tie';
    }
    if (ComputerMove === 'Paper') {
        result = 'You lose';
    }
    if (ComputerMove === 'Scissors') {
        result = 'You win';
    }

    alert(`You Picked Rock. Computer Picked ${ComputerMove}. ${result}.`);

    if (result === 'You win') {
        wins++;
    }
    if (result === 'You lose') {
        losses++;
    }
    if (result === 'Tie') {
        ties++;
    }

    document.querySelector('.stats').innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}


function playPaper() {
    RandomNumber = Math.random();
    ComputerMove = '';
    
    
    if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
        ComputerMove = 'Rock';
    }
    
    else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        ComputerMove = 'Paper';
    }

    else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
        ComputerMove = 'Scissors'
    }
    
    result = '';
    
    if (ComputerMove === 'Rock') {
        result = 'You win';
    }
    if (ComputerMove === 'Paper') {
        result = 'Tie';
    }
    if (ComputerMove === 'Scissors') {
        result = 'You lose';
    }
    
    alert(`You Picked Paper. Computer Picked ${ComputerMove}. ${result}.`);
    
    if (result === 'You win') {
        wins++;
    }
    if (result === 'You lose') {
        losses++;
    }
    if (result === 'Tie') {
        ties++;
    }
    document.querySelector('.stats').innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

function playScissor() {
    
    RandomNumber = Math.random();
    ComputerMove = '';
    
    
    if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
        ComputerMove = 'Rock';
    }
    
    else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        ComputerMove = 'Paper';
    }
    
    else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
        ComputerMove = 'Scissors'
    }
    
    result = '';
    
    if (ComputerMove === 'Rock') {
        result = 'You lose';
    }
    if (ComputerMove === 'Paper') {
        result = 'You win';
    }
    if (ComputerMove === 'Scissors') {
        result = 'Tie';
    }
    
    alert(`You Picked Scissors. Computer Picked ${ComputerMove}. ${result}.`);
    
    if (result === 'You win') {
        wins++;
    }
    if (result === 'You lose') {
        losses++;
    }
    if (result === 'Tie') {
        ties++;
    }
    document.querySelector('.stats').innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;

    document.querySelector('.stats').innerHTML = `Wins: 0, Losses: 0, Ties: 0`
}