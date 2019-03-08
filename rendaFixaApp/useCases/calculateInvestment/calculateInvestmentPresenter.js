class CalculateInvestmentPresenter {
    constructor(viewModel) {
        this.viewModel = viewModel;
        this.Defaults.InvestmentName = 'Meu Investimento';
        this.errorMessages.UNKOWN = 'Erro';
        this.errorMessages.INVALID_EMPTY_NAME = 'O nome do investimento não pode ser vazio';
        this.errorMessages.INVALID_PARAMS = 'Parâmetros inválidos para o investimento';
        this.errorMessages.INVALID_LFT_PARAMS = 'A taxa do LFT deve ser 100% da Selic';
        this.errorMessages.NEGATIVE_PARAMS = 'Não pode haver parâmetros negativos';
    }

    presentFillInitialData(resModel) {
        const viewModelData = {};
        viewModelData.name = this.Defaults.InvestmentName;
        viewModelData.finalGrossIncome = Number
            .toPrecision(resModel.finalGrossIncome, 2).toString();
        viewModelData.finalNetIncome = Number.toPrecision(resModel.finalNetIncome, 2).toString();
        this.viewModel.setInitialData(viewModelData);
    }

    presentCalculateInvestment(resModel) {
        const viewModelData = {};
        viewModelData.finalGrossIncome = Number
            .toPrecision(resModel.finalGrossIncome, 2).toString();
        viewModelData.finalNetIncome = Number.toPrecision(resModel.finalNetIncome, 2).toString();
        viewModelData.hasError = resModel.hasError;

        if (resModel.hasError) {
            if (Object.prototype.hasOwnProperty.call(this.errorMessages, resModel.errCode)) {
                viewModelData.errorMsg = this.errorMessages[resModel.errCode];
            } else {
                viewModelData.errorMsg = this.errorMessages.UNKOWN;
            }
        }

        this.viewModel.setCalculateInvestmentData(viewModelData);
    }
}

export default CalculateInvestmentPresenter;
