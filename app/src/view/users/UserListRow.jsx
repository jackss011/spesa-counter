import React from 'react'


class UserListRow extends React.Component {
    render() {
        const user = this.props.user

        return (
            <li>
                <div>{user.id}</div>
                <div>{user.name}</div>
            </li>
        );
    }
}

export default UserListRow
