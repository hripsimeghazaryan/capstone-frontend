class Requests {
    constructor() {
        this.url = "http://localhost:3000";
    }   

    sendRequest = async (route, {body, ...requestParams}) => {
        const params = {
            ...requestParams,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        console.log(params)
        const response = await fetch(`${this.url}/${route}`, params);
        const data = await response.json();
        return data;
    }
}

const requests = new Requests();
export default requests;