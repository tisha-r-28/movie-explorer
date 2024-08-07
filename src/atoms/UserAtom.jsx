import { atom } from "jotai";

export const loginData = atom({
    email : '',
    password : ''
})

export const signupData = atom({
    email : '',
    password : ''
})

export const token = atom(localStorage.getItem('token') ||null);