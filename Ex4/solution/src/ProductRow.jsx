import React from 'react';

const ProductRow = (props) => {
    return (
        <tr>
            <td>
                {/* iPhone 6 */}
                {props.product.stocked ? props.product.name : <span style={{color: 'red'}}>{props.product.name}</span> }
                {/* {props.product.name} */}
            </td>
            <td>
                {/* £399.00 */}
                {props.product.price}
            </td>
        </tr>
    );
}
 
export default ProductRow;