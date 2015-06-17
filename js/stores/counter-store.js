import {EventEmitter} from 'events';
import counterConstants from '../constants/counter-constants';
import dispatcher from '../dispatcher/dispatcher';
// import assign from 'object-assign';
import counterWebApiUtils from '../utils/counter-web-api-utils';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let counters = {};

class CounterStore extends EventEmitter {
    getAll() {
        return counters;
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
dispatcher.register((action) => {
    switch (action.actionType) {
        case counterConstants.GET_COUNTERS:
            counterWebApiUtils.getCounters().on('value', (data) => {
                counters = _.values(data.val());
                counterStore.emitChange();
            });

            break;

        default:
        // no op
    }
});
