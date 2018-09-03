import React from 'react';
export default class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type ="text" placeholder ="search"></input>
                    <p>Only show products in stock<input type ="checkbox"></input></p>
                </form>
            </div>
        )
    }
}