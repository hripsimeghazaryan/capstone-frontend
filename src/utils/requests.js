import { getToken } from "./tokens.js";

class Requests {
    constructor() {
        this.url = "http://localhost:3000";
        this.token = getToken();
    }   

    sendRequest = async (route, {method, body}) => {
        const params = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...(method !== "GET" ? {body: JSON.stringify(body)} : {}),
        }
        const response = await fetch(`${this.url}/${route}`, params);
        const data = await response.json();
        return data;
    }

    login = async (body) => {
        console.log(body)
        const response = await this.sendRequest("user-account/login", {method: "POSt", body: body})
        return response;
    }

    sendAuthorizedRequest = async (route, {method, body}) => {
        const params = {
            method, 
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            ...(method !== "GET" ? {body: JSON.stringify(body)} : {}),
        }
        const response = await fetch(`${this.url}/${route}`, params);
        const data = await response.json();
        return data;
    }

    uploadImage = async (route, method, body) => {
        const response = await fetch(`${this.url}/${route}`, {
            method: method,
            ...(method !== "GET" ? {body: body} : {}),
        });
        const data = await response.json();
        return data;
    }

    setAuthToken(token) {
        this.token = token;
    }
}

const requests = new Requests();
export default requests;