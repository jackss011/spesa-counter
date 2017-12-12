import React from 'react'


class ConfirmDialog extends React.Component {
    render() {
        const condensed = this.props.condensed ? 'condensed' : '';

        return (
            <div className={`confirm-dialog ${condensed}`}>

                <div className="content">{this.props.children}</div>

                <div className="buttons">
                    <button
                        className="no"
                        onClick={e => this.onResult(false)}
                    >
                        {condensed ? 'No' : 'Cancel'} 
                    </button>

                    <button
                        className="yes"
                        onClick={e => this.onResult(true)}
                    >
                        {condensed ? 'Yes' : 'Okay'}
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
