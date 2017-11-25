import {Spec} from './model/Entry'

export function isEntryInputValid(str, validIds) {
    for(let ch of str) {
        if(isNaN(ch) && !validIds(ch) && ch !== ' ' && ch !== '.')
            return false;
    }

    return true
}




export function parsePrice(str) {
    let decon = "";

    for(let ch of str) {
        let num = Number(ch);

        if((!isNaN(num) || ch == '.') && ch != ' ')
            decon += ch;
        else
            break;
    }

    let rest = str.substring(decon.length, str.length);
    let price = parseFloat(decon);

    return {price, rest};
}


function parseIds(str) {
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


function parseTimes(str) {
    let decon = "";

    if(!str) return {times: 1, rest: null};

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

    let decon = "";
    let spec = new Spec();

    let retIds = parseIds(str);
    spec.addId(retIds.ids);

    //console.log('rest tmp:', retIds.rest);

    let {times, rest} = parseTimes(retIds.rest);
    spec.setTimes(times);

    return {spec, rest};
}
