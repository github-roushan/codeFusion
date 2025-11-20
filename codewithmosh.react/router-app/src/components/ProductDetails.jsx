import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

class ProductDetails extends Component {
    state = {  } 
    handleSave = () => {
        console.log("Save button clicked");
        this.props.navigate('/products');
    };

    render() { 
        const { id } = this.props;
        return (
            <div>
                <h2>Product Details</h2>
                <p>Product ID: {id}</p>
                <button onClick={() => this.handleSave()}>Save</button>
            </div>
        );
    }
}

// Wrapper component to use useParams hook and pass id as prop
function ProductDetailsWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <ProductDetails id={id} navigate={navigate} />;
}
 
export default ProductDetailsWrapper;