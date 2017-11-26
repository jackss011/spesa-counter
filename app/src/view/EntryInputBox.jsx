import React from 'react'
import { connect } from 'react-redux'

import {parseEntry} from '../utils'
import {Entry} from '../model/Entry'
import ActionGenerator from '../redux/actions'


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
        let {sanitizedValue, entry} = parseEntry(target.value, this.isValidId);
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

    isValidId(id) {
        return id === 'c' || id === 'a';
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAddEntry: (entry) => dispatch(ActionGenerator.addEntry(entry))
    };
}

export default connect(null, mapDispatchToProps)(EntryInputBox);
