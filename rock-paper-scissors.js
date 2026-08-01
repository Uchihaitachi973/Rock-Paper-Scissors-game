let wins = 0;
let losses = 0;
let ties = 0;

function playRock() {
    const RandomNumber = Math.random();
    let ComputerMove = '';
    const YourMove = 'Rock';


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
    if (result === 'You win') {
        document.querySelector('.result').innerHTML = 'You win';
    }
    if (result === 'You lose') {
        document.querySelector('.result').innerHTML = 'You lose';
    }
    if (result === 'Tie') {
        document.querySelector('.result').innerHTML = 'Tie';
    }

    if (ComputerMove === 'Rock') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/rock-emoji.png" class = "rock-image">  <img src = "images/rock-emoji.png" class = "rock-image"> Computer`
    }
    if (ComputerMove === 'Paper') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/rock-emoji.png" class = "rock-image">  <img src = "images/paper-emoji.png" class = "paper-image"> Computer`
    }
    if (ComputerMove === 'Scissors') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/rock-emoji.png" class = "rock-image">  <img src = "images/scissors-emoji.png" class = "scissors-image"> Computer`
    }
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
    if (result === 'You win') {
        document.querySelector('.result').innerHTML = 'You win';
    }
    if (result === 'You lose') {
        document.querySelector('.result').innerHTML = 'You lose';
    }
    if (result === 'Tie') {
        document.querySelector('.result').innerHTML = 'Tie';
    }
    if (ComputerMove === 'Rock') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/paper-emoji.png" class = "rock-image">  <img src = "images/rock-emoji.png" class = "rock-image"> Computer`
    }
    if (ComputerMove === 'Paper') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/paper-emoji.png" class = "rock-image">  <img src = "images/paper-emoji.png" class = "paper-image"> Computer`
    }
    if (ComputerMove === 'Scissors') {
        document.querySelector('.moves').innerHTML = `You <img src = "images/paper-emoji.png" class = "rock-image">  <img src = "images/scissors-emoji.png" class = "scissors-image"> Computer`
    }
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
    if (result === 'You win') {
        document.querySelector('.result').innerHTML = 'You win';
    }
    if (result === 'You lose') {
        document.querySelector('.result').innerHTML = 'You lose';
    }
    if (result === 'Tie') {
        document.querySelector('.result').innerHTML = 'Tie';
    }
}
if (ComputerMove === 'Rock') {
    document.querySelector('.moves').innerHTML = `You <img src = "images/scissors-emoji.png" class = "rock-image">  <img src = "images/rock-emoji.png" class = "rock-image"> Computer`
}
if (ComputerMove === 'Paper') {
    document.querySelector('.moves').innerHTML = `You <img src = "images/scissors-emoji.png" class = "rock-image">  <img src = "images/paper-emoji.png" class = "paper-image"> Computer`
}
if (ComputerMove === 'Scissors') {
    document.querySelector('.moves').innerHTML = `You <img src = "images/scissors-emoji.png" class = "rock-image">  <img src = "images/scissors-emoji.png" class = "scissors-image"> Computer`
}

function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;
    
    document.querySelector('.stats').innerHTML = `Wins: 0, Losses: 0, Ties: 0`
    document.querySelector('.result').innerHTML = ''
    document.querySelector('.moves').innerHTML = ''
}
