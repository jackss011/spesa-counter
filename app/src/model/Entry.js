
export class Spec {
    constructor() {
        this.ids = [];
        this.times = 1;
    }

    isForAll() {
        return this.ids === [];
    }

    addId(id) {
        if(!id) return;

        this.ids.push(...id);
    }

    setTimes(n) {
        if(isNaN(n)) return;

        this.times = n;
    }
}


export class Entry {
    constructor() {
        this.price = 0.0;
        this.specs = [new Spec()];
    }

    addSpec(spec) {
        if(!spec) return;

        this.removeForAllSpecs();
        this.specs.push(spec);
    }

    removeForAllSpecs() {
        let newSpecs = [];

        for(let i = 0; i < this.specs.length; ++i)
            if(!this.specs[i].isForAll())
                newSpecs.push(this.specs[i]);

        this.specs = newSpecs;
    }

    set price(p) {
        this.price = p;
    }
}
