
export class Spec {
    constructor() {
        this.ids = [];
        this.times = -1;
    }

    isForAll() {
        return this.ids.length === 0;
    }

    addId(id) {
        if(!id) return;

        if(!this.ids.includes(id))
            this.ids.push(id);
    }

    addIds(ids) {
        ids.forEach(id => this.addId(id));
    }

    hasId(id) {
        return this.ids.includes(id);
    }

    getIds() {
        return this.ids;
    }

    setTimes(n) {
        if(!n ||isNaN(n)) return;

        this.times = n;
    }

    getTimes() {
        return this.times > 0 ? this.times : 1;
    }

    toString() {
        let times = this.times > 0 ? this.times : '';

        if(this.isForAll()) return ' ' + times;

        let ids = this.ids.reduce((acc, curr) => acc + curr, '');
        return ids + times;
    }

    static fromJSON(json) {
        let spec = new Spec();
        spec.setTimes(json.times);
        json.ids.forEach(id => spec.addId(id));
        return spec;
    }
}


export class Entry {
    constructor() {
        this.price = 0.0;
        this.specs = [];
    }

    addSpec(spec) {
        if(!spec) return;

        if(this.hasForAllSpec()) return;
        if(this.hasDuplicatedIds(spec)) return;

        this.specs.push(spec);
    }

    hasForAllSpec() {
        return this.specs.reduce((acc, spec) => acc || spec.isForAll(), false);
    }

    hasDuplicatedIds(spec) {
        let duplicates = false;

        this.specs.forEach(s => {
            s.getIds().forEach(id => {
                if(spec.hasId(id)) duplicates = true;
            })
        })

        return duplicates;
    }

    removeForAllSpecs() {
        let newSpecs = [];

        for(let i = 0; i < this.specs.length; ++i)
            if(!this.specs[i].isForAll())
                newSpecs.push(this.specs[i]);

        this.specs = newSpecs;
    }

    setPrice(p) {
        if(!p) return;

        this.price = p;
    }

    getPrice() {
        return this.price;
    }

    specsToString() {
        return this.specs.reduce((acc, curr) => acc + curr.toString(), '');
    }

    toString() {
        return this.getPrice() + this.specsToString();
    }

    getSpecs() {
        return this.specs.length > 0 ? this.specs : [new Spec()];
    }

    calculate(shares) {
        this.getSpecs().forEach(spec => {
            const toPay = spec.getTimes() * this.getPrice();

            if(!spec.isForAll()) {
                const ids = spec.getIds();

                for(let id of ids)
                    shares[id] += toPay / ids.length;
            }
            else {
                const userNum = Object.entries(shares).length;

                for(const id in shares)
                    shares[id] += toPay / userNum;
            }
        })

        return shares;
    }

    hasId(id) {
        let hasId = false;

        this.specs.forEach(spec => {
            if(spec.hasId(id)) hasId = true
        });

        return hasId;
    }

    static fromJSON(json) {
        let entry = new Entry();
        entry.setPrice(json.price);
        json.specs.forEach( spec => entry.addSpec(Spec.fromJSON(spec)) );
        return entry;
    }
}
