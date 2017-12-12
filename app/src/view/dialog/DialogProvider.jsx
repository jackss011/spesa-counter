import React from 'react'
import {connect} from 'react-redux'

import DeleteUserDialog from 'view/users/DeleteUserDialog'
import {isObjectEmpty} from 'model/utils'


class DialogProvider extends React.Component {
    render() {
        const visible = !isObjectEmpty(this.props.mainDialog);

        return (
            <div
                className="dialog-container"
                style={{visibility: visible ? 'visible' : 'collapse'}}
            >
                <div className="dialog-window">
                    {this.getDialog()}
                </div>
            </div>
        );
    }

    getDialog() {
        const dialog = this.props.mainDialog;

        switch(dialog.type) {
            case 'DELETE_USER':
                return <DeleteUserDialog/>
        }
    }
}


function mapStateToProps({mainDialog}) {
    return {
        mainDialog
    };
}

export default connect(mapStateToProps)(DialogProvider)
