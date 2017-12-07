import React from 'react'


class Tab extends React.Component {
    render() {
        return (
            <div
                className={`tab ${this.props.selected ? 'selected' : ''}`}
                onClick={e => this.props.onClick(e)}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Tab
