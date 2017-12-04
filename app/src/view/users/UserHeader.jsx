import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import AddUserForm from './AddUserForm'


class UserHeader extends React.Component {
    render() {
        const displayForm = this.props.displayForm;

        return (
            <div className="user-header">
                <div className="top-row">
                    <div className="label">Users</div>

                    <button
                        onClick={e => this.onAddUser()}
                        className={!displayForm ? 'add' : 'cancel'}
                    >
                        {!displayForm
                            ? <i className="material-icons">add</i> 
                            : 'Cancel'
                        }
                    </button>
                </div>

                {displayForm && <AddUserForm/>}
            </div>
        );
    }


    onAddUser() {
        this.props.onToggleForm();
    }
}


function mapStateToProps({ui}) {
    return {
        displayForm: ui.displayAddUserForm,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onToggleForm: () =>
            dispatch(ActionGenerator.UI_toggleAddUserForm()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
