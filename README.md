# Hangman Game with Create React App
## Condition of the task
The game should have an array of short and simple words. At the beginning, load a random word from the array, for which show only the first and the last letter. If there are others that are the same as the first or last one, they also should be show at the beginning. Also make an array of all the letters. Let the array generate as many letters as the word contains in * 2 (and a minimum of 10 letters), making sure that the necessary letters exist in them to guess the word and that there are no repeats. For example, the word is TELEPHONE. Therefore the player will be able to choose from 18 letters to guess the word. If it is dog, then he will choose from 10 letters as that is the minimum.
On each turn, the player's lives will decrease if he is wrong and a letter will be revealed if he guesses. The player has 10 tries. The reduction of lives must be done in two ways: The first one is a standard gallows - you can try to find or draw 10 pictures of the different stays on the gallows on a board and show them one after the other. The other is using a ProgressBar from Reactstrap, which at the beginning is filled and glows green. When it drops below 5 attempts to glow yellow and below 3 attempts to glow red, and decrease progressively. 
The game progress should be saved so if the player exits the browser or closes the tab, then come back they can continue from where they left off. If the player makes their 10 attempts and doesn't guess the word, the system should display Game Over and have a Play Again option. If the player guesses the word, the system should display Congratulations and a Play Again option. Play Again should not reload the page, but use the straight to make a new play.
Use ES6 syntax, functional components and good folder names, files and variables. Write comments on the more complex functions explaining how work.

## Preview of the solution

![preview](http://store.picbg.net/pubpic/3B/89/0422538f497a3b89.png)


## How to run 
### `npm install`

Installs all dependances

### `npm start`

Runs the app on [http://localhost:3000](http://localhost:3000).
