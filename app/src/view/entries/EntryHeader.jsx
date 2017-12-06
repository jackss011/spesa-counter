import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import {isObjectEmpty} from 'model/utils'


class EntryHeader extends React.Component {
    render() {
        const canEdit = this.props.hasEntries;
        const canClear = this.props.hasEntries;
        const displayButtons = true;

        return (
            <div className="entry-header">
                <div className="label">Entries</div>

                {displayButtons &&
                    <button
                        onClick={e => this.props.onClear()}
                        className="clear"
                        disabled={!canClear}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                }

                {displayButtons &&
                    <button
                        onClick={e => this.onEdit()}
                        className="edit"
                        disabled={!canEdit}
                    >
                        <i className="material-icons">edit</i>
                    </button>
                }

            </div>
        );
    }



}


function mapStateToProps({entries}) {
    return {
        hasEntries: !isObjectEmpty(entries)
    }
}

function mapDispatchToProps(dis) {
    return {
        onClear: () => dis(ActionGenerator.setEntries({})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryHeader)
