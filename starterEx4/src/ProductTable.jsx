import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
     const ProductTable  = (props) => {
        let rows = [];
        let lastCategory = null;
        props.products.forEach((product) => {
            if(product.category !== lastCategory){
                lastCategory = product.category;
                rows.push(<ProductCategoryRow category = {product.category}/>);
            }
            rows.push(<ProductRow product = {product} />);
        })
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    } 
export default ProductTable;