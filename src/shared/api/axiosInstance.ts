import axios from "axios";

export const api = axios.create({
    baseURL: "https://team-6.internship.api.visiflow-ai.ru/api/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});