import axios from "axios";

export const checkLogin = async ({ userName, userPassword }) => {
    const loginReturn = await axios.post(`${import.meta.env.VITE_PEEPSURL}/login`, { userName, userPassword });

    const loginStatus = loginReturn.status === 200;

    return loginStatus;
}