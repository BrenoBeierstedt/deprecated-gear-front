import React from 'react';
import PropTypes from "prop-types";

import Thumb from '/thumb';



const gUser = (props) => {
    const gUser = props.gUser;

    // Um componente de input pode alterar a quantidade no futuro
    gUser.quantity = 1;





    return (
        <div  className="shelf-item" data-sku={gUser.sku}>
            {gUser.isFreeShipping &&
            <div className="shelf-stopper">Inativo</div>
            }
            <Thumb
                classes="shelf-item__thumb"
                src={require(`../../static/products/${gUser.sku}_1.jpg`)}
                alt={gUser.title}

            />
            <a href="google.com" >{gUser.title}</a>

            <p >{gUser.email}</p>



        </div>


    );
}


gUser.propTypes = {
    gUser: PropTypes.object.isRequired,
   addGUser: PropTypes.func.isRequired,
};

export default gUser;