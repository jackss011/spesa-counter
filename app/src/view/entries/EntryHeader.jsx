import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'


class EntryHeader extends React.Component {
    render() {
        return (
            <div className="entry-header">
                <div className="label">Entries</div>

                <button
                    onClick={e => this.props.onClear()}
                    className="clear"
                >
                    <i className="material-icons">delete</i>
                </button>

                <button
                    onClick={e => this.onEdit()}
                    className="edit"
                >
                    <i className="material-icons">edit</i>
                </button>

            </div>
        );
    }



}


function mapDispatchToProps(dis) {
    return {
        onClear: () => dis(ActionGenerator.setEntries({})),
    }
}

export default connect(null, mapDispatchToProps)(EntryHeader)
