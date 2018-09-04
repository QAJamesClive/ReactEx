import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import {PRODUCTS} from './products.js';

export default class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filterText : "",
            inStockOnly : false
        }

        this.handleFilterTextChange = (filterText) =>{
            this.setState({
                filterText
            });
        }

        this.handleInStockOnChange =(inStockOnly =>{
            this.setState({
                inStockOnly
            })
        })

    }
    render() { 
        return (
            <div>
                <SearchBar searchDetails={this.state}
                handleInStockOnlyChange={this.handleInStockOnlyChange}
                handleFilterTextChange={this.handleFilterTextChange} 
                />
                <ProductTable products = {PRODUCTS} searchDetails={this.state}/>
               </div>
        );
    }
}
