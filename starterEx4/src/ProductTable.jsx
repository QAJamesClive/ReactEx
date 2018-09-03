import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
     const ProductTable  = (props) => {
        let rows = [];
        let lastCategory = null;
        for(product in props.products){
            if(product.category != lastCategory){
                
            }
        }
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow />
                    <ProductRow />
                </tbody>
            </table>
        )
    } 
export default ProductTable;