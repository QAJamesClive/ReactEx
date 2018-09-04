import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = (e) => {
            this.props.handleFilterTextChange(e.target.value);
        }

        this.handleInStockOnlyChange = (e) => {
            this.props.handleInStockOnlyChange(e.target.checked);
        }
        
    }
    render() { 
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.searchDetails.filterText} 
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input 
                        type="checkbox" 
                        checked={this.props.searchDetails.inStockOnly} 
                        onChange={this.handleInStockOnlyChange}
                    />
                    {' '}Only show products in stock
                </p>    
            </form>
        );
    }
}
 
export default SearchBar;