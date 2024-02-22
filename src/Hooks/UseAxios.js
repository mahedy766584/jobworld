import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5001/",
    // withCredentials: true,
});


const UseAxios = () => {
    return instance;
};

export default UseAxios;

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });