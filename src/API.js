import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class yodlrAPI {
    static async register(userData) {
        try {
            const res = await axios.post(`${BASE_URL}/users`, userData)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getUsers() {
        try {
            const res = await axios.get(`${BASE_URL}/users`)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }
}

export default yodlrAPI;