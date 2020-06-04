import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1 style={headerStyle}>XO GAME</h1>
            </div>
        )
    }
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}


export default Header
