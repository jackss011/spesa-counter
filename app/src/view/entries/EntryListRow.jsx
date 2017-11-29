import React from 'react'

import SpecLabel from 'view/specs/SpecLabel'


class EntryListRow extends React.Component {
    render() {
        const entry = this.props.entry;

        return (
            <li>
                <div>{entry.price}</div>
                {this.specs()}
            </li>
        );
    }

    specs() {
        return this.props.entry.getSpecs().map(spec => <SpecLabel spec={spec}/>);
    }
}

export default EntryListRow;
