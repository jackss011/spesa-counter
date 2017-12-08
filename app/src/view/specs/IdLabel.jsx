import React from 'react'
import {connect} from 'react-redux'

import {getUserColorById} from 'redux/helpers'


class IdLabel extends React.Component {
    render() {
        const color = this.props.color || '';

        return (
            <div
                className="id-label"
                style={{ backgroundColor: color }}
            >
                {this.props.id}
            </div>
        )
    }
}


function mapStateToProps({users}, ownProps) {
    return {
        color: getUserColorById(users, ownProps.id)
    };
}

export default connect(mapStateToProps)(IdLabel)
