export const setToken = (token) => {
    localStorage.setItem("sessionToken", token)
}

export const getToken = () => {
    return localStorage.getItem('sessionToken')
}

export const removeToken = () => {
    localStorage.removeItem("sessionToken")
}

export const hasToken = () => {
    return getToken() !== null;
}

export const tokenDecoder = (token) => {
    if(typeof token === "string") {
        const tokens = token.split(".");
        return JSON.parse(atob(tokens[1]));
    }
}