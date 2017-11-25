import React from 'react'

import EntryListRow from './EntryListRow'


class EntryList extends React.Component {
    render() {
        return (
            <ul>
                {this.createListRows()}
            </ul>
        );
    }

    createListRows() {
        return [<EntryListRow key='0'/>];
    }
}


export default EntryList;
