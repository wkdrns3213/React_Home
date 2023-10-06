import axios from "axios";

const API_URL = 'http://127.0.0.1:8080';
const login = async (requestData, e) => {

    console.log('API 호출에 전달된 requestData:', requestData);

    /* // response =
     await axios.post(`http://127.0.0.1:8080/api/users`, requestData)
         .then(response => {
             return response.data.user;
         })
         .catch(error => {
             console.log(error.response.data.status);
             console.log(error.response.data.title);
             console.log(error.response.data.detail);
         })*/


    try {
        const response = await axios.post(`http://127.0.0.1:8080/api/users`, requestData);
        return response.data.user;
    } catch (error) {
        console.log(error.response.data.status);
        console.log(error.response.data.title);
        console.log(error.response.data.detail);
        throw error; // 에러를 다시 던져서 상위 함수로 전달합니다.
    }
};


export const apiFunction = (requestData) => {
    return login(requestData);
};
