import React from 'react';
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.handleFilterTextChange = (e) => {
            this.props.handleFilterTextChange(e.target.value);
        }

        this.handleInStockOnlyChange = (e) => {
            this.props.handleInStockOnlyChange(e.target.checked);
        }
    }
    render(){
        let searchDetails = this.state;
        return(
            <div>
                <form>
                    <input 
                        type ="text" placeholder ="search" 
                        value = {this.props.searchDetails.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>Only show products in stock<input type ="checkbox" 
                    value = {this.props.searchDetails.inStockOnly}
                    onChange={this.handleInStockOnlyChange}
                    /></p>
                </form>
            </div>
        )
    }
}