
export function fetchMethod(method,body) {

    let bod = JSON.stringify(body);
    let met = method;

    if(met === "GET"){
        return {
            method: 'GET',

            headers: new Headers({
                'content-type': 'application/json',

            'Authorization': localStorage.getItem('auth-token'),
        }),
            body: bod,
        }
    }
    if(met === "PUT"){
        return  {
            method: 'PUT',
            crossDomain:true,

            headers: new Headers({
                'content-type': 'application/json',

                'Authorization': localStorage.getItem('auth-token'),
            }),
            body: bod,

        }
    }
    if(met === "DELETE"){
        return {method: 'DELETE',

            headers: new Headers({
                'content-type': 'application/json',

                'Authorization': localStorage.getItem('auth-token'),
            }),
            body: bod

        }
    }
    if(met === "POST"){
        return {
            crossDomain:true,

            method: 'POST',
            body: bod,

            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('auth-token'),
            }

        }
    }
    else{
        return console.log("Method not found")
    }

}
