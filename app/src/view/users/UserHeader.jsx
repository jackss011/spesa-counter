import React from 'react'
import {connect} from 'react-redux'

import {isObjectEmpty} from 'model/utils'
import {ActionGenerator} from 'redux/actions'
import AddUserForm from './AddUserForm'


class UserHeader extends React.Component {
    render() {
        const displayForm = this.props.displayForm;
        const edit = this.props.edit;
        const displayCancel = displayForm || edit;
        const canEdit = this.props.hasUsers;

        return (
            <div className="user-header">
                <div className="top-row">
                    <div className="label">Users</div>

                    {!displayCancel &&
                        <button
                            onClick={e => this.onEditUsers()}
                            className="edit"
                            disabled={!canEdit}
                        >
                            <i className="material-icons">edit</i>
                        </button>
                    }

                    {!displayCancel &&
                        <button
                            onClick={e => this.onAddUser()}
                            className="add"
                        >
                            <i className="material-icons">add</i>
                        </button>
                    }

                    {displayCancel &&
                        <button
                            className="cancel"
                            onClick={e => this.onCancel()}
                        >
                            Cancel
                        </button>
                    }
                </div>

                {displayForm && <AddUserForm/>}
            </div>
        );
    }


    onAddUser() {
        this.props.onDisplayForm();
    }

    onEditUsers() {
        this.props.onEdit();
    }

    onCancel() {
        this.props.onCancel();
    }
}


function mapStateToProps({users, ui}) {
    return {
        displayForm: ui.displayAddUserForm,
        edit: ui.editUsers,
        hasUsers: !isObjectEmpty(users),
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onDisplayForm: () =>
            dispatch(ActionGenerator.UI_displayAddUserForm(true)),

        onEdit: () =>
            dispatch(ActionGenerator.UI_editUsers(true)),

        onCancel: () => {
            dispatch(ActionGenerator.UI_editUsers(false));
            dispatch(ActionGenerator.UI_displayAddUserForm(false));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
