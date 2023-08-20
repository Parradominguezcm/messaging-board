import axios from "axios";

export const checkLogin = async ({ userName, userPassword }) => {
    const loginResult = await axios.post(`${import.meta.env.VITE_PEEPSURL}/login`, { userName, userPassword });

    const loginStatus = loginResult.status === 200;

    return loginStatus;
}