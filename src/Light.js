import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Light extends Component{
    static propsTypes = {
        isLight: PropTypes.bool.isRequired,
    };

    render() {
        return(
            <div>
                {this.props.isLight ? 'Megan' : 'Sunny'}
            </div>
        );
    }
}

export default Light;
