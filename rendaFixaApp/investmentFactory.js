import Investment from './entities/investment';
import CDB from './entities/cdb';
import LCIA from './entities/lcia';
import LFT from './entities/lft';

class InvestmentFactory {
    static createInvestment(data) {
        switch (data.productName) {
        case Investment.getProductNames().LCI:
        case Investment.getProductNames().LCA:
            return new LCIA(data);
        case Investment.getProductNames().CDB:
            return new CDB(data);
        case Investment.getProductNames().LFT:
            return new LFT(data);
        default:
            return new CDB(data);
        }
    }
}

export default InvestmentFactory;
