import axios from "axios";

const BASE_URL = "https://cafcintos-production.up.railway.app/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNThkMjYyNTg4YjkyZjFjOGZjZTY3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Njc2NTUyMiwiZXhwIjoxNjY3MDI0NzIyfQ.uj1WgDJjtMuNqZRF5yBARmF3iuDCJ6aKNJnHlaXl1Ik";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});