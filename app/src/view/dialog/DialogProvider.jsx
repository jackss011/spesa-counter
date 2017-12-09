import React from 'react'


class DeleteLabel extends React.Component {
    render() {
        const visible = true;

        return (
            <div
                className="dialog-container"
                style={{visibility: visible ? 'visible' : 'collapse'}}
            >
                <div className="dialog-window">
                    Hello
                </div>
            </div>
        );
    }
}

export default DeleteLabel
