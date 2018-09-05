import React, {Component} from 'react';

export default class Search extends Component{
    constructor(){
        super();

        this.state = {
            value : ""
        }

        this.handleChange = event => {
            this.setState({
                value : event.target.value
            });
        }

        this.handleSubmit = event =>{
            event.preventDefault();
            this.props.onSearch(this.state.value);
        }

    }
    componentDidMount(){
        console.log("search componentDidMount");
    }
    componentDidUpdate(){
        console.log("search constructorDidUpdate");
    }
    static getDerivedStateFromprops(props, state){
        console.log("search getDerivedStateFromprops");
        console.dir({props});
        console.dir({state});
    }
    getSnapsBeforeUpdate(prevProps,prevState){
        console.log("search getSnapsBeforeUpdate");
        console.dir({prevProps});
        console.dir({prevState});
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("search shouldComponentUpdate");
        console.dir({nextProps});
        console.dir({nextState});
        return !(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState) === JSON.stringify(this.state));
    }
    componentWillUnmount(){
        console.log("search componentWillUnmount");
    }
    render(){
        console.log("search render");
        return(
            <form id = "geocoding_form" className = "form-horizontal" onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <div className = "col-xs-12 col-md-6 col-md-offset-3">
                        <div className = "input-group">
                            <input 
                                type ="text" 
                                className ="form-control" 
                                id = "address" 
                                placeholder = "Find a location..." 
                                onChange = {this.handleChange}
                                value = {this.state.value}>
                            </input>
                            <span className ="input-group-btn">
                                <span 
                                    className =" glyphicon glyphicon-search" 
                                    aria-hidden = "true"
                                    onClick = {this.handleSubmit}>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}