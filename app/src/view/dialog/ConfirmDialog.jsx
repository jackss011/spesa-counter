import React from 'react'


class ConfirmDialog extends React.Component {
    render() {
        return (
            <div
                className="confirm-dialog"
                style={{visibility: visible ? 'visible' : 'collapse'}}
            >
                <div className="content">{this.props.children}</div>
                
                <div className="buttons">
                    <button
                        className="no"
                        onClick={e => this.onConfirm(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="yes"
                        onClick={e => this.onConfirm(true)}
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
