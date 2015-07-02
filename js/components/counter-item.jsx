import React from 'react';

import counterActions from '../actions/counter-actions.js';

export default class CounterItem extends React.Component {
    constructor(props) {
        super(props);

        this.onIncrement = () => {
            counterActions.incrementCounter(this.props.id, this.props.count);
        };

        this.onDecrement = () => {
            counterActions.decrementCounter(this.props.id, this.props.count);
        };

        this.componentWillReceiveProps = () => {
            this.forceUpdate();
        };
    };

    render() {
        return (
            <li>
                <span className="counter-name">{this.props.name}</span>
                <button className="minus btn btn-red" onClick={this.onDecrement}>-</button>
                <span className="count">{this.props.count}</span>
                <button className="plus btn btn-red" onClick={this.onIncrement}>+</button>
            </li>
        );
    }
}

CounterItem.displayName = 'CounterItem';

CounterItem.propTypes = {
    count: React.PropTypes.number,
    counterStore: React.PropTypes.object,
    id: React.PropTypes.string,
    key: React.PropTypes.string,
    name: React.PropTypes.string
};
