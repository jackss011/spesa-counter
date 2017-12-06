import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import SpecLabel from 'view/specs/SpecLabel'
import PriceLabel from 'view/generic/PriceLabel'
import DeleteLabel from 'view/generic/DeleteLabel'


class EntryListRow extends React.Component {
    render() {
        const entry = this.props.entry;
        const edit = this.props.edit;

        return (
            <li className="entry-list-row">
                {edit && <DeleteLabel onClick={e => this.onDelete()}/>}

                <PriceLabel price={entry.getPrice()}/>

                {this.specs()}
            </li>
        );
    }

    specs() {
        return this.props.entry.getSpecs()
            .map(spec => <SpecLabel key={spec.toString()} spec={spec}/>);
    }

    onDelete() {
        this.props.onDelete(this.props.id);
    }
}

function mapStateToProps({ui}) {
    return {
        edit: ui.editEntries,
    }
}

function mapDispatchToProps(dis) {
    return {
        onDelete: id => dis(ActionGenerator.deleteEntry(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryListRow);
