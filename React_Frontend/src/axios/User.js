import axios from "axios";

const BOOKSTAGRAM_API_BASE_URL = "http://localhost:8080/api/v1";

class UserService {

    loginUser(user)
    {
        return axios.post(BOOKSTAGRAM_API_BASE_URL + '/auth/login', user);
    }

    registerUser(user)
    {
        return axios.post(BOOKSTAGRAM_API_BASE_URL + '/auth/register' , user).then(res => res.data);
    }
}

export default new UserService;