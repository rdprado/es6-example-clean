import Investment from './investment';
import PostFixedTaxable from './behaviours/postFixedTaxable';

class CDB extends Investment {
    constructor(data) {
        super(data, new PostFixedTaxable());
    }
}

export default CDB;
