import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData);
    // take first 10 data from fake data 
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    const [cart, setcart] =useState([]);

    const handleAddProduct = (product) =>{
        console.log('Product Added', product);
        const newCart = [...cart, product];
        setcart(newCart);
    }
    
    return (
            <div className="shop_container">
                <div className="product_container">
                    <h3>{products.length}</h3>
                    {
                        products.map(pd=> <Product 
                            handleAddProduct={handleAddProduct}
                            product={pd} > </Product>)
                    }
                    </div>

                <div className="cart-container">

                    <Cart cart={cart} ></Cart>

                </div>
    
    </div>
    );
};

export default Shop;