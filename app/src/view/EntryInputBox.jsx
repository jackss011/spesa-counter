import React from 'react'
import {parseEntry} from '../utils'
import {Entry} from '../model/Entry'


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
            console.log('Yepppp');
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

export default EntryInputBox;
