import React from 'react'

import AddUserForm from './AddUserForm'


class UserHeader extends React.Component {
    render() {
        return (
            <div className="user-header">
                <div className="top-row">
                    <div className="label">Users</div>

                    <button onClick={e => this.onAddUser()}>
                        Add
                    </button>
                </div>

                {/* <AddUserForm/> */}
            </div>
        );
    }
}

export default UserHeader
