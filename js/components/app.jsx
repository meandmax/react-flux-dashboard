import React from 'react';

import Header from './header';
import AppContainer from './app-container';
import Counters from './Counters';
import Footer from './footer';
import counterStore from '../stores/counter-store.js';
import counterActions from '../actions/counter-actions.js';


const getCounterState = function () {
    return {
        allCounters: counterStore.getAll()
    };
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const onChange = () => {
            this.setState(getCounterState());
        };

        this.state = getCounterState();

        this.componentDidMount = () => {
            counterStore.addChangeListener(onChange);
            counterActions.getCounters();
        };

        this.componentWillUnmount = () => {
            counterStore.removeChangeListener(onChange);
        };
    }

    render() {
        return (
            <div>
                <Header />
                <AppContainer>
                    <Counters counters={this.state.allCounters} />
                </AppContainer>
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';
