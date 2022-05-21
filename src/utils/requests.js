class Requests {
    constructor() {
        this.url = "http://localhost:3000";
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

    uploadImage = async (route, method, body) => {
        const response = await fetch(`${this.url}/${route}`, {
            method: method,
            ...(method !== "GET" ? {body: body} : {}),
        });
        const data = await response.json();
        return data;
    }
}

const requests = new Requests();
export default requests;