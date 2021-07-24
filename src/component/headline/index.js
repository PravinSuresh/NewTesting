import React, { Component } from 'react';

class Headline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { header, desc } = this.props;
        if (!header) {
            return null;
        }
        else {
            return (
                <div data-test="headline-component">
                    <h1 data-test="header">{header}</h1>
                    <p data-test="description">{desc}</p>
                </div>
            );
        }

    }
}

export default Headline;