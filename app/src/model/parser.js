import {Entry, Spec} from './Entry'

export function sanitizePriceRest(str, validIds) {
    let ret = str;

    for(let ch of str)
        if(isNaN(ch) && !validIds(ch) && ch !== ' ')
            ret = ret.replace(ch, "");

    return ret;
}


export function parsePrice(str) {
    let decon = "";
    let foundDot = false;
    let firstChar = true;

    for(let ch of str) {
        let num = Number(ch);

        if(( !isNaN(num) || (ch === '.' && !foundDot) || (ch === '-' && firstChar) ) && ch != ' ') {
            if(ch === '.') foundDot = true;
            firstChar = false;
            decon += ch;
        }
        else
            break;
    }

    let rest = str.substring(decon.length, str.length);
    let taken = str.substring(0, decon.length);
    let price = parseFloat(decon);

    return {price, rest, taken};
}


export function parseIds(str) {
    let decon = "";
    let ids = [];

    for(let ch of str) {
        if(/^[a-z]/.test(ch)) {
            decon += ch;
            ids.push(ch);
        }
        else
            break;
    }

    let rest = str.substring(decon.length, str.length);

    return {ids, rest};
}


export function parseTimes(str) {
    let decon = "";

    if(!str) return {times: null, rest: null};

    for(let ch of str) {
        let num = Number(ch);

        if(!isNaN(num))
            decon += ch;
        else
            break;
    }

    let rest = str.substring(decon.length, str.length);
    let times = parseInt(decon);

    return {times, rest};
}


export function parseSpec(str) {
    if(!str) return;

    let spec = new Spec();

    let retIds = parseIds(str);
    spec.addIds(retIds.ids);

    //console.log('rest tmp:', retIds.rest);

    let {times, rest} = parseTimes(retIds.rest);
    spec.setTimes(times);

    return {spec, rest};
}


export function parseEntry(value, validIds) {
    let sanitizedValue = value;
    let entry = new Entry();

    if(value !== '') {
        let priceResult = parsePrice(value);
        if( isNaN(priceResult.price) && priceResult.taken !== '-' )
            return {sanitizedValue: "", entry: null}
        entry.setPrice(priceResult.price);

        let rest = sanitizePriceRest(priceResult.rest, validIds);

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

        sanitizedValue = priceResult.taken + entry.specsToString() || '';
    }
    else {
        entry = null;
    }

    return {sanitizedValue, entry};
}
