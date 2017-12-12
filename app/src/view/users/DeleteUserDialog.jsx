import React from 'react'
import {connect} from 'react-redux'

import ConfirmDialog from 'view/dialog/ConfirmDialog'
import {ActionGenerator} from 'redux/actions'


class DeleteUserDialog extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <ConfirmDialog onResult={result => this.onResult(result)}>

                <h1>Delete user</h1>
                <div>
                    Are you sure you want to delete user: <strong>{user.name}</strong>?
                </div>
                <div>
                    This user has entries that will be deleted with him.
                </div>

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
