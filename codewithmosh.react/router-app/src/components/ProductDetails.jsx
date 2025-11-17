import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class ProductDetails extends Component {
    state = {  } 
    render() { 
        const { id } = this.props;
        return (
            <div>
                <h2>Product Details</h2>
                <p>Product ID: {id}</p>
            </div>
        );
    }
}

// Wrapper component to use useParams hook and pass id as prop
function ProductDetailsWrapper() {
    const { id } = useParams();
    return <ProductDetails id={id} />;
}
 
export default ProductDetailsWrapper;