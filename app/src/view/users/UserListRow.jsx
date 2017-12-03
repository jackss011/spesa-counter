import React from 'react'

import IdLabel from 'view/specs/IdLabel'
import PriceLabel from 'view/generic/PriceLabel'


class UserListRow extends React.Component {
    render() {
        const user = this.props.user;
        const share = this.props.share;

        return (
            <li className="user-list-row">
                <IdLabel id={user.id}/>
                <div className="name">{user.name}</div>
                <PriceLabel price={share}/>
            </li>
        );
    }
}

export default UserListRow
