class CalculateInvestmentPresenter {
    constructor(viewModel) {
        this.viewModel = viewModel;
        this.errorMessages.UNKOWN = 'Erro';
        this.errorMessages.INVALID_PARAMS = 'Parâmetros inválidos para o investimento';
        this.errorMessages.INVALID_LFT_PARAMS = 'A taxa do LFT deve ser 100% da Selic';
        this.errorMessages.NEGATIVE_PARAMS = 'Não pode haver parâmetros negativos';
    }

    static getDefaultInvestmentName() {
        return 'Meu Investimento';
    }

    presentCalculatedInvestment(resModel) {
        const viewModelData = this.viewModel.getData();
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

        this.viewModel.setData(viewModelData);
    }
}

export default CalculateInvestmentPresenter;
