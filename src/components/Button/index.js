import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

class Button extends Component {
    render() {
        if (this.props.link) {
            return (
                <Link
                    className='Button'
                    to={this.props.link ? this.props.link : false}
                    type={this.props.type ? this.props.type : 'button'}
                >
                    {this.props.text}
                </Link>
            );
        } else {
            return (
                <button
                    className='Button'
                    type={this.props.type ? this.props.type : 'button'}
                >
                    {this.props.text}
                </button>
            );
        }
    }
}

export default Button;
