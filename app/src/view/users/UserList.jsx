import React from 'react'
import { connect } from 'react-redux'

import UserListRow from './UserListRow'
import TotalLabel from 'view/generic/TotalLabel'

import { mapEntries } from 'model/utils'
import { calculateShares, calculateTotalFromShares } from 'redux/helpers'


class UserList extends React.Component {
    render() {
        const shares = calculateShares(this.props.users, this.props.entries);
        const total = calculateTotalFromShares(shares);

        return (
            <div className="user-list">
                <ul>
                    {this.createUserList(shares)}
                </ul>
                <div className="flex-space"/>
                <TotalLabel total={total}/>
            </div>
        )
    }

    createUserList(shares) {
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
