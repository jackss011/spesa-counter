import React from 'react'
import {connect} from 'react-redux'

import EntryListRow from './EntryListRow'


class EntryList extends React.Component {
    render() {
        return (
            <div className="entry-list">
                <ul>
                    {this.createListRows()}
                </ul>
            </div>
        );
    }

    createListRows() {
        //TODO: make this a util function (mapEntries)
        return Object.entries(this.props.entries)
            .map( ([id, entry]) => <EntryListRow key={id} id={id} entry={entry}/>);
    }
}


function mapStateToProps(state) {
    return {
        entries: state.entries
    };
}

export default connect(mapStateToProps)(EntryList);
