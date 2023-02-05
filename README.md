# Welcome to Chess

## A Collaborative Project to make an Online Chess Player, made in React and Express.js using Typescript and a Mysql Database

# How It Works

## The Basics

Chess leverages a self-hosted mysql backend to facilitate connections between users and to store game data. It uses Express.js, written in Typescript, to handle connections between the Front and Back End. The front end is written in Typescript using the React framework and vanilla CSS.

## Gameplay Pipeline

User Generates Link → Goes to Link, Loads game from DB/Backend → User makes move → Move is saved in DB

## Database Blueprints

### game

gameID varchar(30),
playerOneUsername varchar(30),
playerTwoUsername varchar(30),
playerOneToken varchar(255),
playerTwoToken varchar(255),
gameboard varchar(5000),
movesLedger varchar(5000),
timestamp varchar(100)

where gameboard is a stringified 2 dimensional array and movesLedger is a stringified array of objects

# Useful Resources

- [Express JS Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [MySQL Tutorial](https://www.w3schools.com/MySQL/default.asp)
- [React Typescript Documentation](https://www.typescriptlang.org/docs/handbook/react.html)
