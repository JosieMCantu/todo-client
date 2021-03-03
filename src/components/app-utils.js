import request from 'superagent';

const URL = 'http://localhost:3001';
export const USER = 'USER';

export async function signUpUser(email, password) {

    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email: email, password: password });

    return response.body;
}

export async function loginUser(email, password) {

    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email: email, password: password });

    return response.body;
}

export function userInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUserLocalStorage() {
    const user = localStorage.getItem(USER);
    if (user && user.token) return JSON.parse(user);
    return {
        email: '',
        id: '',
        token: ''
    }
}
