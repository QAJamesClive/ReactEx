import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
     const ProductTable  = (props) => {
        let rows = [];
        let lastCategory = null;
        let searchDetails = this.state; 

        props.products.forEach((product) => {
            let lowerCaseProductName = product.name.toLowerCase();
            let lowerCaseFilterText = props.searchDetails.filterText.toLowerCase();
            if(lowerCaseProductName.indexOf(lowerCaseFilterText) === -1 || (product.stocked && props.searchDetails.inStockOnly)){
                return;
            }
            if(product.category !== lastCategory){
                lastCategory = product.category;
                rows.push(<ProductCategoryRow category = {product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product = {product} key={product.name} />);
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