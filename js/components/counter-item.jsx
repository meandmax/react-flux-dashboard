import React from 'react';

export default class CounterItem extends React.Component {
     constructor(props) {
        super(props);

        this.onIncrement = () => {};
        this.onDecrement = () => {};
    }

    render() {
        return (
            <li>
                <span className="counter-name">{this.props.name}</span>
                <button className="minus btn btn-red" onClick={this.onIncrement}>-</button>
                <span className="count">{this.props.count}</span>
                <button className="plus btn btn-red" onClick={this.onDecrement}>+</button>
            </li>
        );
    }
}

CounterItem.displayName = 'CounterItem';

CounterItem.propTypes = {
    count: React.PropTypes.string,
    name: React.PropTypes.string
};
