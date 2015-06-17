import Firebase from 'firebase';

const fb = new Firebase('https://react-counter.firebaseio.com/');

export default {
    getCounters: () => {
        return  fb.child('/counters/');
    }
};
