import {EventEmitter} from 'events';
import counterConstants from '../constants/counter-constants';
import dispatcher from '../dispatcher/dispatcher';
import counterWebApiUtils from '../utils/counter-web-api-utils';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let counters = {};

class CounterStore extends EventEmitter {
    getCounters() {
        return counters;
    }

    getCounter(id) {
        return counters[id];
    }

    incrementCounter(id) {
        counters[id].count += 1;
        console.log('inc: ' + counters[id].count);
        return counters[id].count;
    }

    decrementCounter(id) {
        counters[id].count -= 1;
        console.log('dec: ' + counters[id].count);
        return counters[id].count;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}

const counterStore = new CounterStore();

export default counterStore;

// Register callback to handle all updates
dispatcher.register((payload) => {
    switch (payload.actionType) {
        case counterConstants.GET_COUNTERS:
            counterWebApiUtils.getCounters().on('value', (data) => {
                counters = _.values(data.val());
                counterStore.emitChange();
            });

            break;

        case counterConstants.INCREMENT_COUNTER:
            counterWebApiUtils.updateCounter(payload.id, counterStore.incrementCounter(payload.id)).on('value', () => {
                counterStore.emitChange();
            });

            break;

        case counterConstants.DECREMENT_COUNTER:
            counterWebApiUtils.updateCounter(payload.id, counterStore.decrementCounter(payload.id)).on('value', () => {
                counterStore.emitChange();
            });

            break;

        default:
        // no op
    }
});
