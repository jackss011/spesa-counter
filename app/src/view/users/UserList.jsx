import React from 'react'
import { connect } from 'react-redux'

import UserListRow from './UserListRow'
import { mapEntries } from 'model/utils'


class UserList extends React.Component {
    render() {
        return (
            <ul>
                {this.createUserList()}
            </ul>
        )
    }

    createUserList() {
        return mapEntries(this.props.users,
            (id, user) => <UserListRow key={id} user={user}/>);
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(UserList)
