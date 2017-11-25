import React from 'react'


class EntryListRow extends React.Component {
    render() {
        return (
            <li>
                <div>{this.props.price}</div>
            </li>
        );
    }
}

export default EntryListRow;
