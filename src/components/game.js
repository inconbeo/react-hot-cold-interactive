import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            guessList: [],
            feedback: "Make your guess",
            randomNumber: Math.floor(Math.random()*100) + 1
        }
    }
    
    resetGame() {
        this.setState({
            guessList: [],
            feedback: "Make your guess",
            randomNumber: Math.floor(Math.random()*100) + 1
        })
    }
    
    evaluateGuess(guess) {
        let difference = Math.abs(guess-this.state.randomNumber);
        if (difference >= 10) {
            this.setState({feedback: 'COLD'})
        }
        else if (difference >= 5) {
            this.setState({feedback: 'WARM'})
        }
        else if (difference >= 1) {
            this.setState({feedback: 'HOT'})
        }
        else 
            this.setState({feedback: 'YOU WIN THE GAME'})
    }

    addToGuessList(guess) {
        this.setState({
            guessList: [...this.state.guessList, guess]
        })
    }

        
    render() {
    return (
        <div>
            <Header newGame={() => this.resetGame()} />
            <GuessSection 
            feedback={this.state.feedback} 
            handleGuess={guess => this.evaluateGuess(guess)}
            addToGuessList={guess => this.addToGuessList(guess)}
            />
            <GuessCount count={this.state.guessList.length} />
            <GuessList guesses={this.state.guessList} />
        </div>
    );
}
}

