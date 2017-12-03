import React from 'react'

import IdLabel from 'view/specs/IdLabel'


class UserListRow extends React.Component {
    render() {
        const user = this.props.user;
        const share = this.props.share;

        return (
            <li className="user-list-row">
                <IdLabel id={user.id}/>
                <div className="name">{user.name}</div>
                <div className="share">{share.toFixed(2)}</div>
            </li>
        );
    }
}

export default UserListRow
