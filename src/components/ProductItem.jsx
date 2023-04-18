import React from 'react';
import Rating from '@mui/material/Rating';
import { useRef } from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
  
    return (
      <img className="product-image"
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src= primaryImg;
        }}
        src={primaryImg} 
        alt=""
        ref={imageRef}
      />
    )
}

const ProductItem = ( { primaryImg, secondaryImg, title, price } ) => {
      return (
      <div className='product-item'> 
          <div>
          <ImageToggleOnMouseOver
              primaryImg={primaryImg}
              secondaryImg={secondaryImg}
              alt="" 
          />
          </div>
          <div className="title">
              <a href="#">{title}</a>
          </div>
          <div className='d-flex rating'>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly></Rating><p>2.5</p>
          </div>
          <div className='price-order d-flex justify-content-between'>
              <p className='price'>£{price}</p>
              <a href="#" className='order-sample'>Order sample</a>
          </div>
          <p className='per-roll d-flex justify-content-start'>per roll</p>
      </div>
      );
}

export default ProductItem;