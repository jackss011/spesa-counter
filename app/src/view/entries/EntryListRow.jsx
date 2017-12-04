import React from 'react'

import SpecLabel from 'view/specs/SpecLabel'
import PriceLabel from 'view/generic/PriceLabel'


class EntryListRow extends React.Component {
    render() {
        const entry = this.props.entry;

        return (
            <li className="entry-list-row">
                <PriceLabel price={entry.getPrice()}/>

                {this.specs()}
            </li>
        );
    }

    specs() {
        return this.props.entry.getSpecs().map(spec => <SpecLabel key={spec.toString()} spec={spec}/>);
    }
}

export default EntryListRow;
