import React from 'react'


class DeleteLabel extends React.Component {
    render() {
        return (
            <button
                className="delete-label"
                onClick={e => this.props.onClick()}
            >
                <i className="material-icons">remove</i>
            </button>
        );
    }
}

export default DeleteLabel
