import React from 'react'

import IdLabel from './IdLabel'


class SpecLabel extends React.Component {
    render() {
        const spec = this.props.spec;

        return (
            <div className="spec-label">
                {this.ids()}
                <div>
                    <span className="times">x</span>
                    {spec.getTimes()}
                </div>
            </div>
        )
    }

    ids() {
        return this.props.spec.getIds().map(id => <IdLabel key={id} id={id}/>);
    }
}

export default SpecLabel
