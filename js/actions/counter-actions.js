import Dispatcher from '../dispatcher/dispatcher';
import counterConstants from '../constants/counter-constants';

export default {
    getCounters: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.GET_COUNTERS
        });
    },

    getCounter: (id) => {
        Dispatcher.dispatch({
            actionType: counterConstants.GET_COUNTER,
            id
        });
    },

    addCounter: (name, count) => {
        Dispatcher.dispatch({
            actionType: counterConstants.ADD_COUNTER,
            name,
            count
        });
    },

    removeCounter: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.REMOVE_COUNTER
        });
    },

    incrementCounter: (id) => {
        console.log('INCREMENT_COUNTER');

        Dispatcher.dispatch({
            actionType: counterConstants.INCREMENT_COUNTER,
            id
        });
    },

    decrementCounter: (id) => {
        console.log('DECREMENT_COUNTER');

        Dispatcher.dispatch({
            actionType: counterConstants.DECREMENT_COUNTER,
            id
        });
    }
};
