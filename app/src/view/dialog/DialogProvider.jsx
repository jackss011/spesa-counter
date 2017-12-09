import React from 'react'


class DialogProvider extends React.Component {
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

export default DialogProvider
