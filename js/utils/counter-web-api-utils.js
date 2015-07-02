import Firebase from 'firebase';

const fb = new Firebase('https://react-counter.firebaseio.com/');

const onComplete = (error) => {
    if (error) {
        console.log('Synchronization failed');
        console.log(error);
    } else {
        console.log('Synchronization succeeded');
    }
};

export default {
    getCounters: () => {
        return fb.child('/counters/');
    },

    updateCounter: (id, value) => {
        let counter = fb.child('/counters/' + id  + '/count');

        counter.set(value, onComplete);

        return counter;
    },

    addCounter: (count, name) => {
        let counters = fb.child('/counters/');

        let counterObj = {
            count,
            name
        };

        let ref = counters.push(counterObj, onComplete).key();

        return {
            ref,
            count,
            name
        };
    }
};
