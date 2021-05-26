import React, { Component } from 'react'

export default class SearchBox extends Component {

   
    render() {
        const {searchChange} = this.props;
        return (
            <div>
                <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder='search robots'
                onChange = {searchChange} />
            </div>
        )
    }
}
