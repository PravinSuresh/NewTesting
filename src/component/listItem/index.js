import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListItem extends Component {
    render() {
        const { title, desc } = this.props;
        if (!title) {
            return null;
        } else {
            return (
                <>
                    <div data-test="list-item-component">
                        <h2 data-test="list-item-title">{title}</h2>
                        <p data-test="list-item-description">{desc}</p>
                    </div>
                </>
            );
        }
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;