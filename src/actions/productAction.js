import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

/*const productsAPI = "https://react-shopping-cart-67954.firebaseio.com/products.json";*/
const userAPI = "http://localhost:8001/api/products";
/*const productsAPI = "http://localhost:8001/api/products";*/


export const fetchGUser = (filters, sortBy, callback) => dispatch => {

    axios.get(userAPI)
        .then(res => {
            let { user } = res.data;

            if(!!filters && filters.length > 0){
                gUser = gUser.filter( p => filters.find( f => p.availableSizes.find( size => size === f ) ) )
            }



            if(!!callback) {
                callback();
            }

            return dispatch({
                type: FETCH_PRODUCTS,
                payload: user
            });

        })
        .catch(err => {
            console.log(err);
            throw new Error('Could not fetch products. Try again later.');
        });
}