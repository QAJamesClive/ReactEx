import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import {PRODUCTS} from './products.js';

export default class FilterableProductTable extends React.Component {
    render() { 
        return (
            <div>
                <SearchBar />
                <ProductTable products = {PRODUCTS}/>
               </div>
        );
    }
}
