import React, { Component } from 'react';
import '../../App.css';
import NavBar from '../../Components/NavBar';

// Style Sheets
import './Product.css'

// Components
import Product_Item from '../../Components/Product_Item/Product_Item'

class Product extends Component {

    state = {
        selectedOption: ''
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }

    render () {
        return (
            <div className="Product">
                <NavBar />
                <div className="Product_Header">
                    <h2>New Year, New Products!</h2>
                    <p>All products coming soon...</p>
                </div>
                
                <div className="Product_Section">
                    <div className="Product_Filter">
                        <ul>
                            <li><input type="radio" value="Pre-Wash" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Pre-Wash'}/>Pre-Wash</li>
                            <li><input type="radio" value="Washing" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Washing'}/>Washing</li>
                            <li><input type="radio" value="Drying" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Drying'}/>Drying</li>
                            <li><input type="radio" value="Scents" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Scents'}/>Scents</li>
                            <li><input type="radio" value="Shacker Products" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Shacker Products'}/>Shacker Product</li>
                        </ul>
                    </div>
                    <div className="Product_Items">
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                        <Product_Item name="Laundry Bag" url="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80" price="$14.99"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;