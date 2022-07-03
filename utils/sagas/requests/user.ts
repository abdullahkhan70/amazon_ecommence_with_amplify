export const requestGetUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(res => console.log(JSON.stringify(res)));

}