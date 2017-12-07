import React from 'react'
import { connect } from 'react-redux'

import {parseEntry} from 'model/parser'
import {Entry} from 'model/Entry'
import {ActionGenerator} from 'redux/actions'
import {makeRandomId, isObjectEmpty} from 'model/utils'
import {existUserId} from 'redux/helpers'


class EntryInputBox extends React.Component {
    constructor() {
        super();

        this.state = { value: '', entry: null };
    }

    render() {
        const canEdit = this.props.hasUsers;

        return (
            <div className="entry-inputbox">
                <input
                    type='text'
                    placeholder={
                        canEdit ? 'Insert entry here' : 'Add some user first'
                    }
                    value={this.state.value}
                    onChange={e => this.onChange(e)}
                    onKeyDown={e => this.onKeyDown(e)}
                    disabled={!canEdit}
                    autocapitalize="off"
                    autocorrect="off"
                />
                <button
                    disabled={this.state.entry ? false : true}
                    onClick={e => this.addEntry()}
                >
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
            </div>
        );
    }

    onChange({target}) {
        let {sanitizedValue, entry} =
            parseEntry(target.value, id => this.props.validId(id));
        this.setState({value: sanitizedValue, entry});
    }

    onKeyDown(event) {
        if(event.key === 'Enter')
            this.addEntry();
    }

    addEntry() {
        if(this.state.entry) {
            this.props.onAddEntry(this.state.entry);
            this.reset();
        }
    }

    reset() {
        this.setState({value: '', entry: null});
    }
}


function mapStateToProps({users}) {
    return {
        validId: id => existUserId(users, id),
        hasUsers: !isObjectEmpty(users),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddEntry: (entry) => dispatch(ActionGenerator.addEntry(makeRandomId(), entry))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryInputBox);
