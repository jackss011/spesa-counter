import React from 'react'
import { connect } from 'react-redux'

import {parseEntry} from 'model/parser'
import {Entry} from 'model/Entry'
import {ActionGenerator} from 'redux/actions'
import {makeRandomId} from 'model/utils'
import {existUserId} from 'redux/helpers'


class EntryInputBox extends React.Component {
    constructor() {
        super();

        this.state = { value: '', entry: null };
    }

    render() {
        return (
            <input
                type='text'
                value={this.state.value}
                onChange={e => this.onChange(e)}
                onKeyDown={e => this.onKeyDown(e)}
            />
        );
    }

    onChange({target}) {
        let {sanitizedValue, entry} =
            parseEntry(target.value, id => this.props.validId(id));
        this.setState({value: sanitizedValue, entry});
    }

    onKeyDown(event) {
        if(event.key === 'Enter' && this.state.entry) {
            this.props.onAddEntry(this.state.entry);
            this.reset();
        }
    }

    reset() {
        this.setState({value: '', entry: null});
    }
}


function mapStateToProps(state) {
    return {
        validId: id => existUserId(state.users, id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddEntry: (entry) => dispatch(ActionGenerator.addEntry(makeRandomId(), entry))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryInputBox);
