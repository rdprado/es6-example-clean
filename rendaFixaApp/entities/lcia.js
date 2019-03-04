import Investment from './investment';
import PostFixedNonTaxable from './behaviours/postFixedNonTaxable';

class LCIA extends Investment {
    constructor(data) {
        super(data, new PostFixedNonTaxable());
    }
}

export default LCIA;
