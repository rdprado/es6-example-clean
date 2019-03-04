import InvestmentFactory from '../../investmentFactory';
import { EntityValidationError, LFTValidationError } from '../../entities/entityValidationError';
import Investment from '../../entities/investment';

class CalculateInvestmentInteractor {
    constructor(interactorOutput, investmentsDataGateway, ratesDataGateway) {
        this.interactorOutput = interactorOutput;
        this.investmentsDataGateway = investmentsDataGateway;
        this.ratesDataGateway = ratesDataGateway;

        this.errorCodes.NO_ERRORS = 'NO_ERRORS';
        this.errorCodes.INVALID_PARAMS = 'INVALID_PARAMS';
        this.errorCodes.INVALID_EMPTY_NAME = 'INVALID_EMPTY_NAME';
        this.errorCodes.INVALID_LFT_PARAMS = 'INVALID_LFT_PARAMS';
        this.errorCodes.NEGATIVE_PARAMS = 'NEGATIVE_PARAMS';
    }

    static getDefaultInvestmentParams() {
        return {
            name: this.interactorOutput.getDefaultInvestmentName(),
            productNames: Investment.getProductNames(),
            productName: Investment.getProductNames().CDB,
            amount: 1000,
            baseRate: 0.6,
            investmentRate: 1,
            getBaseRateNames: Investment.getBaseRateNames(),
            baseRateName: Investment.getBaseRateNames().CDI,
        };
    }

    calculateInvestment(reqModel) {
        try {
            const resModel = {};

            // validate
            const errCode = this.isValidInvestment(reqModel);
            if (errCode !== this.errorCodes.NOERRORS) {
                resModel.finalGrossIncome = 0;
                resModel.finalNetIncome = 0;
                resModel.hasErrors = true;
                resModel.errCode = errCode;
                this.interactorOutput.presentCalculateInvestment(resModel);
                return;
            }

            // calculate
            const investment = InvestmentFactory.createInvestment(reqModel);
            resModel.finalGrossIncome = investment.finalGrossIncome();
            resModel.finalNetIncome = investment.finalNetIncome();
            resModel.hasErrors = false;

            // present
            this.interactorOutput.presentCalculateInvestment(resModel);
        } catch (err) {
            const resModel = {};
            resModel.hasErrors = true;
            resModel.finalGrossIncome = 0;
            resModel.finalNetIncome = 0;
            if (err instanceof EntityValidationError) {
                resModel.errCode = this.errorCodes.INVALID_PARAMS;
                this.interactorOutput.presentCalculateInvestment(resModel);
            } if (err instanceof LFTValidationError) {
                resModel.errCode = this.errorCodes.INVALID_LFT_PARAMS;
                this.interactorOutput.presentCalculateInvestment(resModel);
            } else {
                throw err;
            }
        }
    }

    isValidInvestment(data) {
        if (data.name === '') {
            return {
                isValid: false,
                errCode: this.errorCodes.INVALID_EMPTY_NAME,
            };
        }

        if (data.amount < 0) {
            return {
                isValid: false,
                errCode: this.errorCodes.NEGATIVE_PARAMS,
            };
        }

        if (data.investmentRate < 0) {
            return {
                isValid: false,
                errCode: this.errorCodes.NEGATIVE_PARAMS,
            };
        }

        if (data.yearlyBaseRate < 0) {
            return {
                isValid: false,
                errCode: this.errorCodes.NEGATIVE_PARAMS,
            };
        }

        return {
            isValid: true,
            errCode: this.errorCodes.NOERRORS,
        };
    }
}

export default CalculateInvestmentInteractor;
