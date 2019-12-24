import React, { Component } from 'react';


class ErrorMessage extends Component {

    render() {

        const { message } = this.props;

        return (
            <div style={{ textAlign: 'center', width: '500px', marginTop: '100px' }}>
                <h2 style={{ color: 'red' }}>{message}</h2>
            </div>
        );

    }

}

export default ErrorMessage;