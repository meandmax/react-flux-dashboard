import React from 'react';
import CounterItem from './counter-item';
import CounterInput from './counter-input';

export default class Counters extends React.Component {
    render() {
        if (Object.keys(this.props.counters).length < 1) {
            return null;
        }

        let allCounters = this.props.counters;
        let counters = [];

        for (let key in allCounters) {
            if (allCounters) {
                counters.push(<CounterItem
                    count={allCounters[key].count}
                    name={allCounters[key].name}
                />);
            }
        }

        return (
            <div className="counter-app">
                <h2 className="title">Counters</h2>
                <CounterInput />
                <ul className="counter-list">{counters}</ul>
            </div>
        );
    }
}

Counters.displayName = 'Counters';

Counters.propTypes = {
    counters: React.PropTypes.object
};
