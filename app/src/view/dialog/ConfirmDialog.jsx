import React from 'react'


class ConfirmDialog extends React.Component {
    render() {
        return (
            <div className="confirm-dialog">

                <div className="content">{this.props.children}</div>

                <div className="buttons">
                    <button
                        className="no"
                        onClick={e => this.onResult(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="yes"
                        onClick={e => this.onResult(true)}
                    >
                        Okay
                    </button>
                </div>
            </div>
        );
    }

    onResult(confirm) {
        this.props.onResult(confirm);
    }
}

export default ConfirmDialog
