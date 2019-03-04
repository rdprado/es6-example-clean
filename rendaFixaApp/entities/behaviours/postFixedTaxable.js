class PostFixedTaxable {
    static updatedGrossIncomeRate(month, yearlyBaseRate, investmentRate) {
        return (((1.0 + yearlyBaseRate) ** (month / 12)) - 1) * investmentRate;
    }

    static updatedNetIncomeRate(month, yearlyBaseRate, investmentRate) {
        return (((1.0 + yearlyBaseRate) ** (month / 12)) - 1) * investmentRate;
    }
}

export default PostFixedTaxable;
