import React from 'react';

export const GameContext = React.createContext({});

export default function GameContextProvider ({children}) {
    const [move, setMove] = React.useState('rock');
    const [botMove, setBotMove] = React.useState('');
    const [winner, setWinner ] = React.useState(null);
    const [hasEnded, setEnded] = React.useState(false);

    function generateBotMove () {
        const moves = ['rock', 'paper', 'scissor'];
        const randomMove = parseInt(Math.random() * (4 - 1) + 1);

        return setBotMove(moves[randomMove - 1]);
    };

    function checkWinner () {
        const gameConditions = {
            rock: {
                loseCondition: 'paper'
            },

            paper: {
                loseCondition: 'scissor'
            },

            scissor: {
                loseCondition: 'rock'
            }
        };


        if (gameConditions[move].loseCondition === botMove) {
            setWinner('bot');
        } else {
            setWinner('player');
        }
    };

    function endGame () {
        generateBotMove();
        checkWinner();
        setEnded(true);
    }

    return (
        <GameContext.Provider value={{
            move,
            winner,
            hasEnded,
            botMove,
            setMove,
            checkWinner,
            endGame
        }}>
            {children}
        </GameContext.Provider>
    )
};