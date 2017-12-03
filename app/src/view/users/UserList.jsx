import React from 'react'
import { connect } from 'react-redux'

import UserListRow from './UserListRow'
import { mapEntries } from 'model/utils'
import { calculateShares } from 'redux/helpers'


class UserList extends React.Component {
    render() {
        return (
            <div className="user-list">
                <ul>
                    {this.createUserList()}
                </ul>
            </div>
        )
    }

    createUserList() {
        const shares = calculateShares(this.props.users, this.props.entries);

        return mapEntries(this.props.users,
            (id, user) => <UserListRow key={id} user={user} share={shares[id]}/>);
    }
}


function mapStateToProps({users, entries}) {
    return {
        users, entries
    }
}

export default connect(mapStateToProps)(UserList)
