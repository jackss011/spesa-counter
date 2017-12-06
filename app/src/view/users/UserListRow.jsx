import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import IdLabel from 'view/specs/IdLabel'
import PriceLabel from 'view/generic/PriceLabel'
import DeleteLabel from 'view/generic/DeleteLabel'


class UserListRow extends React.Component {
    render() {
        const user = this.props.user;
        const share = this.props.share;
        const edit = this.props.editUsers;

        return (
            <li className="user-list-row">
                {edit &&
                    <DeleteLabel
                        onClick={e => this.onDelete()}
                    />
                }
                <IdLabel id={user.id}/>
                <div className="name">{user.name}</div>
                <PriceLabel price={share}/>
            </li>
        );
    }

    onDelete() {
        this.props.onDeleteUser(this.props.user.id);
    }
}


function mapStateToProps({ui}) {
    return {
        editUsers: ui.editUsers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteUser: id => dispatch(ActionGenerator.deleteUser(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListRow)
