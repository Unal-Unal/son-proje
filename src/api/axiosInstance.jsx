// src/api/axiosInstance.js

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});