import React from 'react';

export default class CounterInput extends React.Component {
    render() {
        return (
            <div className="counter-input">
            <input
                className="input"
                placeholder="Type here ..."
            />

                <button className="add btn btn-blue">add counter</button>
            </div>
        );
    }
}

CounterInput.displayName = 'CounterInput';

// CounterInput.propTypes = {
//     count: React.PropTypes.string,
//     name: React.PropTypes.string
// };
