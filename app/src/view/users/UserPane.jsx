import React from 'react'

import AddUserForm from './AddUserForm'
import UserList from './UserList'


class UserPane extends React.Component {
    render() {
        return (
            <div>
                <AddUserForm/>
                <UserList/>
            </div>
        );
    }
}

export default UserPane
