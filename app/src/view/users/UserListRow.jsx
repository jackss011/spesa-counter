import React from 'react'


class UserListRow extends React.Component {
    render() {
        const user = this.props.user;
        const share = this.props.share;

        return (
            <li>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{share}</div>
            </li>
        );
    }
}

export default UserListRow
