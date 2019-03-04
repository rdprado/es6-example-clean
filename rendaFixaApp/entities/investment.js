import EntityValidationError from './entityValidationError';

class Investment {
    constructor(data, taxableBehaviour) {
        this.validate(data);
        this.name = data.name;
        this.amount = data.amount;
        this.periodInMonths = data.periodInMonths;
        this.investmentRate = data.investmentRate;
        this.baseRateName = data.baseRateName;
        this.yearlyBaseRate = data.yearlyBaseRate;
        this.incomeCalculator = taxableBehaviour;
    }

    static validate(data) {
        if (data.periodInMonths < 0) {
            throw (new EntityValidationError('Investment period cannot be negative.'));
        }

        if (!Number.isNaN(data.amount) || !Number.isFinite(data.amount)) {
            throw (new EntityValidationError('Investment amount must be a finite number.'));
        }

        if (!Number.isNaN(data.periodInMonths) || !Number.isFinite(data.periodInMonths)) {
            throw (new EntityValidationError('Investment period must be a finite number.'));
        }

        if (!Number.isNaN(data.investmentRate) || !Number.isFinite(data.investmentRate)) {
            throw (new EntityValidationError('Investment rate must be a finite number.'));
        }

        if (!Number.isNaN(data.yearlyBaseRate) || !Number.isFinite(data.yearlyBaseRate)) {
            throw (new EntityValidationError('Investment yearly base rate must be a finite number.'));
        }

        if (!Object.prototype.hasOwnProperty.call(Investment.getProductNames(), data.productName)) {
            throw (new EntityValidationError('Unkonwn product for an investment.'));
        }

        if (!Object.prototype.hasOwnProperty.call(Investment.getBaseRateNames(),
            data.baseRateName)) {
            throw (new EntityValidationError('Unkonwn base rate for an investment.'));
        }
    }

    static getProductNames() {
        return {
            CDB: 'cdb',
            LCI: 'lci',
            LCA: 'lca',
            LFT: 'lft',
        };
    }

    static getBaseRateNames() {
        return {
            CDI: 'cdi',
            Selic: 'selic',
            IPCA: 'ipca',
        };
    }

    getData() {
        return {
            name: this.name,
            productName: this.productName,
            baseRateName: this.baseRateName,
            amount: this.amount,
            periodInMonths: this.periodInMonths,
            yearlyBaseRate: this.yearlyBaseRate,
            investmentRate: this.investmentRate,
        };
    }

    updatedGrossIncome(month) {
        return this.updatedGrossIncomeRate(month) * this.amount;
    }

    updatedGrossIncomeRate(month) {
        const minMonth = Math.min(month, this.periodInMonths);
        return this.incomeCalculator.updatedGrossIncomeRate(minMonth,
            this.yearlyBaseRate,
            this.investmentRate);
    }

    finalGrossIncome() {
        return this.incomeCalculator.updatedGrossIncomeRate(this.periodInMonths,
            this.yearlyBaseRate,
            this.investmentRate);
    }

    updatedNetIncome(month) {
        return this.updatedNetIncomeRate(month) * this.amount;
    }

    updatedNetIncomeRate(month) {
        const minMonth = Math.min(month, this.periodInMonths);
        return this.incomeCalculator.updatedNetIncomeRate(minMonth,
            this.yearlyBaseRate,
            this.investmentRate);
    }

    finalNetIncome() {
        return this.incomeCalculator.updatedNetIncomeRate(this.periodInMonths,
            this.yearlyBaseRate,
            this.investmentRate);
    }
}

export default Investment;
