# Dice Roll Game

This is a simple dice roll game for one player, implemented in Node.js. The player can roll a die and move across a board with different effects on specific squares. The player wins by landing exactly on square 7. If the player chooses to quit, they lose the game.

## Game Rules

- The player rolls a die in each turn and moves forward the number of spaces indicated by the die.
- Certain squares have effects:
  - Square 1: Move forward 3 spaces
  - Square 2: No effect
  - Square 3: Move forward 2 spaces
  - Square 4: No effect
  - Square 5: No effect
  - Square 6: Move back 4 spaces
- The player wins by landing exactly on square 7. If the player moves past square 7, they move back by the number of excess spaces.
- The player can choose to quit the game at any time, which results in a loss.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository or download the source code.
3. Navigate to the project directory in your terminal.
4. Install the required dependencies using npm (if any):
```ruby
   npm install
```

## Usage 
1. Run the game using Node.js
```ruby
  node game.js
```
2. Follow the on-screen prompts to play the game.
### Example 
```ruby
Enter your name: John
Welcome to the game, John!
Do you want to roll the die or quit? (roll/quit): roll
John rolled a 4
John is now on square 4
Do you want to roll the die or quit? (roll/quit): roll
John rolled a 2
John is now on square 6
Square 6: Move back 4 spaces
John is now on square 2
Do you want to roll the die or quit? (roll/quit): roll
John rolled a 5
John is now on square 7
Congratulations, John! You have won the game.
```


## Code Overview
### Player Class
- `constructor(name)`: Initializes the player with a name and starting position of 0.
- `move(spaces)`: Moves the player by the specified number of spaces.
- `setPosition(position)`: Sets the player's position to the specified value.

### Game class
- `constructor(player)`: Initializes the game with a player and a board with specific effects.
- `rollDice()`: Simulates rolling a die and returns a number between 1 and 6.
- `playTurn()`: Handles the logic for a single turn, including moving the player, applying board effects, and checking for win conditions.
- `start()`: Starts the game and handles player input for rolling the die or quitting.

### `StartGame` Function
- Prompts the user for their name and initializes a new game with the player.

Have fun!