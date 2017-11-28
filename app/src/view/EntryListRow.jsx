import React from 'react'


class EntryListRow extends React.Component {
    render() {
        const entry = this.props.entry;

        return (
            <li>
                <div>{entry.price}</div>
            </li>
        );
    }
}

export default EntryListRow;
