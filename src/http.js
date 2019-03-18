import axios from 'axios';

export default axios.create({
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    baseURL: 'https://avetiq-test.firebaseapp.com/proscons/group/g1552672008583/user/u1552672008582',
    timeout: 1000
});
