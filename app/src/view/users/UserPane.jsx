import React from 'react'

import UserHeader from './UserHeader'
import UserList from './UserList'


class UserPane extends React.Component {
    render() {
        return (
            <div className="user-pane">
                <UserHeader/>
                <UserList/>
            </div>
        );
    }
}

export default UserPane
