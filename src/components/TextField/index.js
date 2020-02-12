import React, { Component } from 'react';
import './TextField.scss';

class TextField extends Component {
    render() {
        return (
            <div className='TextField'>
                <input
                    type={this.props.type ? this.props.type : 'text'}
                    name={this.props.name}
                    id={this.props.name}
                    placeholder={this.props.text}
                />
                <label htmlFor={this.props.name}>{this.props.text}</label>
            </div>
        );
    }
}

export default TextField;
