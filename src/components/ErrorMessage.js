import React, { Component } from 'react';


class ErrorMessage extends Component {

    render() {

        const { message } = this.props;

        return (
            <div style={{ textAlign: 'center', width: '600px', marginTop: '100px' }}>
                <h3 style={{ color: 'red' }}>{message}</h3>
            </div>
        );

    }

}

export default ErrorMessage;