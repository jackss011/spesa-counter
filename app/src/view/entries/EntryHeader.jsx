import React from 'react'
import {connect} from 'react-redux'

import ConfirmDialog from 'view/dialog/ConfirmDialog'

import {ActionGenerator} from 'redux/actions'
import {isObjectEmpty} from 'model/utils'


class EntryHeader extends React.Component {
    render() {
        const canEdit = this.props.hasEntries;
        const canClear = this.props.hasEntries;
        const confirmClear = this.props.confirmClear;
        const displayButtons = !this.props.edit && !confirmClear;
        const displayCancel = !displayButtons && !confirmClear;

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

                {displayCancel &&
                    <button
                        onClick={e => this.props.onCancel()}
                        className="cancel"
                    >
                        Cancel
                    </button>
                }

                {confirmClear &&
                    <ConfirmDialog onResult={r => this.confirmClearResult(r)}>
                        u sure
                    </ConfirmDialog>
                }

            </div>
        );
    }


    confirmClearResult(result) {
        if(result)
            this.props.onClearConfirm();
        else
            this.props.onClearCancel();
    }
}


function mapStateToProps({entries, ui}) {
    return {
        hasEntries: !isObjectEmpty(entries),
        edit: ui.editEntries,
        confirmClear: ui.clearEntriesConfirm,
    }
}

function mapDispatchToProps(dis) {
    return {
        onClear: () => dis(ActionGenerator.UI_showClearEntriesConfirm()),
        onClearCancel: () => dis(ActionGenerator.UI_showClearEntriesConfirm(false)),
        onClearConfirm: () => dis(ActionGenerator.clearEntries()),
        
        onEdit: () => dis(ActionGenerator.UI_editEntries(true)),
        onCancel: () => dis(ActionGenerator.UI_editEntries(false)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryHeader)
