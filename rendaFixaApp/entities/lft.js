import Investment from './investment';
import PostFixedTaxable from './behaviours/postFixedTaxable';
import EntityError from './entityError';

class LFT extends Investment {
    constructor(data) {
        if (data.baseRateName !== Investment.getProductNames().Selic) {
            throw (new EntityError('LFT should always use Selic as base rate'));
        }

        if (data.investmentRate !== 1) {
            throw (new EntityError('LFT investment rate should always be 100% of selic'));
        }

        super(data, new PostFixedTaxable());
    }
}

export default LFT;
