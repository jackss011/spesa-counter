import React from 'react'
import {connect} from 'react-redux'

import ConfirmDialog from 'view/dialog/ConfirmDialog'
import {ActionGenerator} from 'redux/actions'


class DeleteUserDialog extends React.Component {
    render() {
        return (
            <ConfirmDialog onResult={result => this.onResult(result)}>
                Are u super duper per mega extra sure?
            </ConfirmDialog>
        )
    }

    onResult(result) {
        if(result)
            this.props.onDeleteUser(this.props.user.id);
        else
            this.props.onCancel();
    }
}


function mapStateToProps({ui}) {
    return {
        dialogId: ui.dialogId
    };
}

function mapDisToProps(dis) {
    return {
        onDeleteUser: id => dis(ActionGenerator.deleteUser(id)),
        onCancel: () => {},
    };
}

export default connect(mapStateToProps, mapDisToProps)(DeleteUserDialog)
