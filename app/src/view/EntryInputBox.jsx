import React from 'react'
import {parsePrice, parseSpec, sanitizePriceRest} from '../utils'
import {Entry} from '../model/Entry'


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
        let value = event.target.value;

        let entry = new Entry();

        if(value !== '') {
            let priceResult = parsePrice(value);
            if(!priceResult.price) return;
            entry.setPrice(priceResult.price);

            let rest = sanitizePriceRest(priceResult.rest, this.isValidId);

            while(true) {
                let specResult = parseSpec(rest);

                if(!specResult || !specResult.spec) {
                    break;
                }
                else {
                    entry.addSpec(specResult.spec);
                    rest = specResult.rest;
                }
            }
        }

        console.log(entry);
        console.log(entry.specsToString());


        this.setState({value: value});
    }

    onSubmit(event) {
        //console.log(event);
    }

    isValidId(id) {
        return id === 'c' || id === 'a';
    }
}

export default EntryInputBox;
