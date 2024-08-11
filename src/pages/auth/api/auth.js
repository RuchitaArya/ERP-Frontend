import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

export const login = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/api/auth/login`, data, {
            headers: {
                "content-type": "application/json",
            },
        });
        console.log(response);
    return response;
    
} catch (err) {
        console.log(err)
        throw err;
    }


};