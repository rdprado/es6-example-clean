class CompareInvestmentInteractor {
}

// // public
// compareInvestmentWithOthers(reqModel) {
//     let investment = null;

//     try {
//         this.isValidInvestment(reqModel);
//         investment = InvestmentFactory.createInvestment(reqModel);
//     } catch (err) {
//         if (err instanceof EntityValidationError
//             || err instanceof UseCaseValidationError) {
//             this.interactorOutput.showValidationWarning();
//             throw new UseCaseValidationError(err);
//         }
//         throw err;
//     }

//     this.investmentsDataGateway.fetchInvestments()
//         .then((investments) => {
//             this.investmentsDataGateway.addInvestment(investment)
//                 .then(() => {
//                     const resModel = this.compareInvestments(investments);
//                     this.interactorOutput.presentComparedInvestments(resModel);
//                 });
//         });
// }

// compareInvestments(investments) {
//     const investmentPeriods = this.getAllInvestmentsPaybackPeriods(investments)
//         .sort((a, b) => (a - b));

//     const comparedInvestments = [];
//     investments.forEach((inv) => {
//         const investmentDataInEveryPeriod = this.calculateInvestmentForEveryPeriod(inv,
//             investmentPeriods);
//         comparedInvestments.push(investmentDataInEveryPeriod);
//     });

//     return { investmentPeriods, comparedInvestments };
// }

// static getAllInvestmentsPaybackPeriods(investments) {
//     const investmentPeriods = new Set();
//     investments.forEach((inv) => {
//         investmentPeriods.add(inv.entityModel().periodInMonths);
//     });
//     return Array.from(investmentPeriods);
// }

// static calculateInvestmentForEveryPeriod(investment, investmentPeriods) {
//     const grossIncomePerMonth = [];
//     const netIncomePerMonth = [];
//     investmentPeriods.forEach((p) => {
//         grossIncomePerMonth.push(investment.updatedGrossIncomeRate(p));
//         netIncomePerMonth.push(investment.updatedNetIncomeRate(p));
//     });

//     const entityModel = investment.getData();

//     return {
//         name: entityModel.name,
//         productName: entityModel.productName,
//         amount: entityModel.amount,
//         periodInMonths: entityModel.periodInMonths,
//         yearlyBaseRate: entityModel.yearlyBaseRate,
//         investmentRate: entityModel.investmentRate,
//         grossIncPerMonth: grossIncomePerMonth,
//         netIncPerMonth: netIncomePerMonth,
//     };
// }

export default CompareInvestmentInteractor;
