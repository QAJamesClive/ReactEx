import React from 'react';

import ProductTable from './ProductTable'
import SearchBar from './SearchBar';

import { PRODUCTS } from './products';


export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.handleFilterTextChange = (filterText) => {
            this.setState({
                filterText
            });
        }

        this.handleInStockOnlyChange = (inStockOnly) => {
            this.setState({
                inStockOnly
            });
        }
    }

    render() { 
        return (
            <div>
                <SearchBar searchDetails={this.state} handleFilterTextChange={this.handleFilterTextChange} handleInStockOnlyChange={this.handleInStockOnlyChange} />
                <ProductTable products={PRODUCTS} searchDetails={this.state} />
            </div>
        );
    }
}
