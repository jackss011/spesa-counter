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


function mapStateToProps({users, mainDialog}) {
    console.log(mainDialog);
    return {
        user: users[mainDialog.id],
    };
}

function mapDisToProps(dis) {
    return {
        onDeleteUser: id => dis(ActionGenerator.deleteUser(id, true)),
        onCancel: () => dis(ActionGenerator.Dialog_close()),
    };
}

export default connect(mapStateToProps, mapDisToProps)(DeleteUserDialog)
