import React from 'react'
import {connect} from 'react-redux'

import UserHeader from './UserHeader'
import UserList from './UserList'
import InfoText from 'view/generic/InfoText'
import {isObjectEmpty} from 'model/utils'


class UserPane extends React.Component {
    render() {
        const showList = this.props.hasUsers;

        return (
            <div className="user-pane">
                <UserHeader/>
                {showList
                    ? <UserList/>
                    : <InfoText text='No users'/>
                }
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        hasUsers: !isObjectEmpty(users),
    };
}

export default connect(mapStateToProps)(UserPane);
