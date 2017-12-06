import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import {isObjectEmpty} from 'model/utils'


class EntryHeader extends React.Component {
    render() {
        const canEdit = this.props.hasEntries;
        const canClear = this.props.hasEntries;
        const displayButtons = !this.props.edit;

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
                        onClick={e => this.props.onEdit()}
                        className="edit"
                        disabled={!canEdit}
                    >
                        <i className="material-icons">edit</i>
                    </button>
                }

                {!displayButtons &&
                    <button
                        onClick={e => this.props.onCancel()}
                        className="cancel"
                    >
                        Cancel
                    </button>
                }

            </div>
        );
    }



}


function mapStateToProps({entries, ui}) {
    return {
        hasEntries: !isObjectEmpty(entries),
        edit: ui.editEntries
    }
}

function mapDispatchToProps(dis) {
    return {
        onClear: () => dis(ActionGenerator.setEntries({})),
        onEdit: () => dis(ActionGenerator.UI_editEntries(true)),
        onCancel: () => dis(ActionGenerator.UI_editEntries(false)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryHeader)
