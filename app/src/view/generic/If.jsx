import React from 'react'

export default class If extends React.Component {
    render() {
        return this.props.if ? this.props.children : null;
    }
}
