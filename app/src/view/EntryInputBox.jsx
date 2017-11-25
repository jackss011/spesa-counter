import React from 'react'
import {parsePrice, parseSpec, isEntryInputValid} from '../utils'


class EntryInputBox extends React.Component {
    constructor() {
        super();

        this.state = { value: '' };
    }

    render() {
        return (
            <input
                type='text'
                value={this.state.value}
                onChange={e => this.onChange(e)}
                onSubmit={e => this.onSubmit(e)}
            />
        );
    }

    onChange(event) {
        let newValue = event.target.value;

        if(isEntryInputValid(newValue, this.isValidId)) {
            console.log('here');

            let ret1 = parsePrice(newValue);
            //console.log(ret1);

            let ret2 = parseSpec(ret1.rest);
            //console.log(ret2);


            this.setState({value: newValue});
        }
    }

    onSubmit(event) {
        //console.log(event);
    }

    isValidId(id) {
        return id === 'c' || id === 'a';
    }
}

export default EntryInputBox;
