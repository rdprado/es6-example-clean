class CompareInvestmentViewModel {
    constructor(updater) {
        this.finalGrossIncome = '0';
        this.finalNetIncome = '0';
        this.updater = updater;
    }

    getData() {
        return {
            finalGrossIncome: this.finalGrossIncome,
            finalNetIncome: this.finalNetIncome,
        };
    }

    setData(viewModel) {
        this.finalGrossIncome = viewModel.finalGrossIncome;
        this.finalNetIncome = viewModel.finalNetIncome;
        this.updater.updateView();
    }
}

export default CompareInvestmentViewModel;
