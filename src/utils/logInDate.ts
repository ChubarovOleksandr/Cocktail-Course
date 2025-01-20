export const setLogInDate = () => {
    localStorage.setItem('loginDate', JSON.stringify(new Date()));
}

export const getLogInDate = () => {
    return localStorage.getItem('loginDate');
}