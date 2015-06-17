import Dispatcher from '../dispatcher/dispatcher';
import counterConstants from '../constants/counter-constants';

export default {
    getCounters: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.GET_COUNTERS
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

    incrementCounter: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.INCREMENT_COUNTER
        });
    },

    decrementCounter: () => {
        Dispatcher.dispatch({
            actionType: counterConstants.DECREMENT_COUNTER
        });
    }
};
