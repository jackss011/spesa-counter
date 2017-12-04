import React from 'react'


class DeleteLabel extends React.Component {
    render() {
        return (
            <div
                className="delete-label"
                onClick={e => this.props.onClick()}
            >
                <i className="material-icons">delete</i>
            </div>
        );
    }
}

export default DeleteLabel
