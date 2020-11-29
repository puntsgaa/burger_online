import axios from "axios";
const instance = axios.create({
    baseURL: 'https://burger-dd7bc.firebaseio.com/'
});

export default instance;