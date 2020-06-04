import React, { Component } from 'react'

export class Square extends Component {
    render(){
        return(
            <button className='square' onClick = {this.props.onClick.bind(this,this.props.id)}>
                    {this.props.square.title} 
            </button>
        )
    }
}

export default Square
