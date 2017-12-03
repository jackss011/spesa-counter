import React from 'react'

import IdLabel from './IdLabel'


class SpecLabel extends React.Component {
    render() {
        const spec = this.props.spec;

        return (
            <div className="spec-label">
                {this.ids()}
                <div className="">{`x${spec.getTimes()}`}</div>
            </div>
        )
    }

    ids() {
        return this.props.spec.getIds().map(id => <IdLabel id={id}/>);
    }
}

export default SpecLabel
