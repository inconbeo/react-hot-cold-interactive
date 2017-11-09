import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            Modal: false
        }
    }

    toggleModal() {
        this.setState({
        Modal: !this.state.Modal
        })
    }

    render() {
        if (!this.state.Modal) {
            return (
                <header >
                    <TopNav  
                    newGame={this.props.newGame}
                    openModal={() => this.toggleModal()}
                    />
                    <h1>HOT or COLD</h1>
                </header>
            );
        }
        else 
        return (
            <header >
                <TopNav  
                newGame={this.props.newGame}
                openModal={() => this.toggleModal()}
                />
                <InfoModal closeModal={() => this.toggleModal()} />
                <h1>HOT or COLD</h1>
            </header>
        );
}
};
