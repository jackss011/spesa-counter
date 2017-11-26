import {Spec} from './model/Entry'

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

    for(let ch of str) {
        let num = Number(ch);

        if((!isNaN(num) || (ch === '.' && !foundDot)) && ch != ' ') {
            if(ch === '.') foundDot = true;
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
