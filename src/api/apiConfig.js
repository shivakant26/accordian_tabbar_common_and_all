import axios from 'axios';

export const Instance = axios.create({
    baseURL : "http://localhost:5500",
    headers : { 
        'Content-Type': 'application/json',
        "Accept": "application/json" 
    }
})
