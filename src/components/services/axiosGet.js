import axios from 'axios'

export const getProductos = async (url) => {
    axios
        .get('http://127.0.0.1:8000/api/categoria/')
        .then(function (response) {
            // manejar respuesta exitosa
            console.log(response)
        })
        .catch(function (error) {
            // manejar error
            console.log(error)
        })
        .then(function () {
            // siempre sera executado
        })

    axios
        .post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone',
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })

    function getUserAccount() {
        return axios.get('/user/12345')
    }

    function getUserPermissions() {
        return axios.get('/user/12345/permissions')
    }

    Promise.all([getUserAccount(), getUserPermissions()]).then(function (
        results
    ) {
        const acct = results[0]
        const perm = results[1]
    })
}