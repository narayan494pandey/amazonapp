import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";
function Checkoutcheckout({id,title,image,price,rating}) {
    const[{basket},dispatch] = useStateValue();
    //console.log(basket);
    const removeFromBasket = () =>{
        //dispatching the item into data layer
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }

  return (
    <div className="checkoutProduct" key={id}>
        <img src={image} />
        <div className="checkoutProduct__info" >
            <p>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_,i) =>(
                    <p>⭐</p>
                ))}
                
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        
    </div>
  )
}

export default Checkoutcheckout
