import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVlNDkwODNjYzcwNmUyYzAzNjFjNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAyNTE2NzAsImV4cCI6MTY0MDUxMDg3MH0.gEDMat0DPhrE5PdlNjeNABn7vO0kIfYfNNdu54fAMJM"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
});