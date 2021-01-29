import axios from 'axios';

const axiosPosts = axios.create({
    baseURL: 'https://labaratory-64-default-rtdb.firebaseio.com/'
});

export default axiosPosts;