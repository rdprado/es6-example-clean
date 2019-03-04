class CalculateInvestmentController {
    constructor(interactor) {
        this.interactor = interactor;
    }

    static calculateInvestment(investmentData) {
        const reqModel = {};

        reqModel.name = investmentData.name;
        reqModel.productName = investmentData.productName.toLowerCase();
        reqModel.baseRateName = investmentData.baseRateName.toLowerCase();
        reqModel.periodInMonths = parseInt(investmentData.periodInMonths, 10);
        reqModel.investmentRate = parseFloat(investmentData.investmentRate) * 0.01;
        reqModel.yearlyBaseRate = parseFloat(investmentData.yearlyBaseRate) * 0.01;
        reqModel.amount = parseFloat(investmentData.amount);

        this.interactor.calculateInvestment(reqModel);
    }
}

export default CalculateInvestmentController;
