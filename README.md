# oof-game-example
This is an oof.gg game example leveraging SDK. The goal of this project is to demonstrate how to use the SDK to create a game.

## TODO
- [x] Create a canvas/webgl context
- [x] Create a game loop
- [ ] Define Game Config
- [ ] Add a Second Player
- [ ] Authenticate with the SDK
- [ ] Send and receive data from the SDK
- [ ] Run the game

## Game Configuration
The game configuration is defined in the `config.json` file. This file contains the following properties:
- `width`: The width of the game canvas
- `height`: The height of the game canvas
- `fps`: The frames per second of the game loop (default is 30)
- `maxPlayers`: The maximum number of players that can join the game (default is 2)