import axios from 'axios';

class httpHandler {

    get(url) {
        return axios.get(url);
    }
    post(url, params) {
        return axios.post(url, params);
    }
    put(url, params) {
        return axios.put(url, params);
    }

}
export default httpHandler;