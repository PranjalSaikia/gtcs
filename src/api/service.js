export function PostData(type, userData) {
    let BaseURL = 'http://geotechno.co.in/restful/';
    //let BaseURL = 'http://localhost/gtcs/';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}



export function PostFormData(type, userData) {
    let BaseURL = 'http://geotechno.co.in/restful/';
    //let BaseURL = 'http://localhost/gtcs/';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + type, {
            method: 'POST',
            body: userData
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}