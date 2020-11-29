import React from 'react'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>***</p>
                </div>
            </div>
            <img
                src="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
                alt="startup book"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
