import React from 'react'
import {parsePrice, parseSpec, sanitizePriceRest} from '../utils'
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

            value = priceResult.taken + entry.specsToString();
        }
        else {
            entry = null;
        }
        //console.log(entry);

        this.setState({value, entry});
    }

    isValidId(id) {
        return id === 'c' || id === 'a';
    }
}

export default EntryInputBox;
