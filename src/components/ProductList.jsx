import React from 'react';
import ProductItem from './ProductItem';
import { useState, useEffect, useRef } from "react";

const ProductList = ( { products }) => {

    const [sortedProducts, setSortedProducts] = useState(products);

    // Function to sort products by title
    const sortProductsByTitle = () => {
        const sorted = [...sortedProducts].sort((a, b) => {
        return a.title.localeCompare(b.title);
        });
        setSortedProducts(sorted);
    };

    // Function to sort products by price
    const sortProductsByPriceAsc = () => {
        const sorted = [...sortedProducts].sort((a, b) => {
            return a.price - b.price;
        });
        setSortedProducts(sorted);
    };

    const sortProductsByPriceDesc = () => {
        const sorted = [...sortedProducts].sort((a, b) => {
            return b.price - a.price;
        });
        setSortedProducts(sorted);
    };

    // Function to handle sort option change
    const handleSortOptionChange = (e) => {
        if (e.target.value === 'title') {
            sortProductsByTitle();
        } else if (e.target.value === 'priceasc') {
            sortProductsByPriceAsc();
        } else if (e.target.value === 'pricedesc') {
            sortProductsByPriceDesc();
        }
    };

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);
    
    
    return (
        <>
            {console.log(sortedProducts)}
            <div className='found-results'> 
                <div className="found-counter">
                    <p><span>Found:</span> {products.length} results</p>
                </div>
                <div className="filters">
                    <button>Colour<i class="arrow-down arrow-filter"></i></button>
                    <button>Brand<i class="arrow-down arrow-filter"></i></button>
                    <button>Design Style<i class="arrow-down arrow-filter"></i></button>
                    <select onChange={handleSortOptionChange}>
                        <option value="">Sort by<i class="arrow-down arrow-filter"></i></option>
                        <option value="title">Title - Alphabeticaly</option>
                        <option value="priceasc">Price - Low to High</option>
                        <option value="pricedesc">Price - High to Low</option>
                    </select>
                </div>
            </div>
            <div className='product-list'> 
                {sortedProducts.length > 0 && sortedProducts.map((product) => (
                    <ProductItem 
                        primaryImg={product.images[0]} 
                        secondaryImg={product.images[1]} 
                        title={product.title} 
                        price={product.price}
                    >
                    </ProductItem>
                ))}
            </div>
        </>
    );
}

export default ProductList;