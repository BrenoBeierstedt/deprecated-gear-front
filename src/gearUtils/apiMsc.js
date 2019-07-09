

module.exports = Object.freeze({
    Add : 'http://api.local.cinalpecar.com.br',
    get: {

        method: 'GET',

        headers: new Headers({

            'Authorization': localStorage.getItem('auth-token'),
        })
    },
    delete: {

        method: 'DELETE',

        headers: new Headers({

            'Authorization': localStorage.getItem('auth-token'),
        })
    },
    put: {

        method: 'PUT',

        headers: new Headers({

            'Authorization': localStorage.getItem('auth-token'),
        })
    },
    post: {

        method: 'POST',

        headers: new Headers({

            'Authorization': localStorage.getItem('auth-token'),
        })
    }

});





