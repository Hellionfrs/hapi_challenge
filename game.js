const readline = require('readline-sync');
/*
  Se require hacer un juego para 1 jugador, donde el jugador podra "tirar" un dado, 
En cada turno, el jugador podra decidir si seguir jugando o retirase; si continúa jugando,
se "tira" el dado, y se avanza la cantidad de casillas que indica el dado, 
y tambien se debe seguir la indicación que indica la casilla donde cayó el jugador. 
El jugador gana cuando llegue exactamente a la posición 7; si se pasa de la posición 7, 
retrocede la cantidad de casillas que excedió; Si el jugador se retira, pierde.

|        Inicio ⬇️       |
| ----------------------- |
| 1: Adelante 3 espacios  |
| 2:                      |
| 3: Adelante 2 espacios  |
| 4:                      |
| 5:                      |
| 6: Retroceda 4 espacios |
| ----------------------- |
|        Meta 🏁          |

*/
class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(spaces) {
    this.position += spaces;
  }

  setPosition(position) {
    this.position = position;
  }
}

class Game {
  constructor(player) {
    this.player = player;
    this.board = {
      1: 3,  // Move forward 3 spaces
      2: 0,  // No effect
      3: 2,  // Move forward 2 spaces
      4: 0,  // No effect
      5: 0,  // No effect
      6: -4, // Move back 4 spaces
    };
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  playTurn() {
    const roll = this.rollDice();
    console.log(`${this.player.name} got ${roll} on the dice`);
    this.player.move(roll);
    console.log(`${this.player.name} is at position ${this.player.position}`);

    if (this.player.position > 7) {
      const excess = this.player.position - 7;
      this.player.setPosition(7 - excess);
      console.log(`You have exceeded the finish line and moved back to square ${this.player.position}`);
    }

    if (this.player.position === 7) {
      console.log(`Congratulations, ${this.player.name}! You have won the game.`);
      return true;
    }

    const boardPosition = this.player.position;
    // Execute board position effect 
    if (this.board.hasOwnProperty(boardPosition)) {
      const effect = this.board[boardPosition];
      if (effect !== 0) {
        this.player.move(effect);
        console.log(`Square ${boardPosition}: ${effect > 0 ? `Move forward ${effect} spaces` : `Move back ${-effect} spaces`}`);
        console.log(`${this.player.name} is now on square ${this.player.position}`);
      }
    }

    return false;
  }

  start() {
    console.log(`Welcome to the game, ${this.player.name}!`);
    let gameWon = false;

    while (!gameWon) {
      const choice = readline.question('Do you want to roll the dice or quit? (roll/quit): ');

      if (choice === 'quit') {
        console.log(`Sorry, ${this.player.name}. You have lost the game.`);
        break;
      } else if (choice === 'roll') {
        gameWon = this.playTurn();
      } else {
        console.log('Invalid option. Please choose "roll" or "quit".');
      }
    }
  }
}

function startGame() {
  const playerName = readline.question('Enter your name: ');
  const player = new Player(playerName);
  const game = new Game(player);
  game.start();
}

startGame();
