

function oneYearGrossIncomeForTaxFigures(wageCalculatorInputs) {
    let firstWeekEarnedGrossIncome = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];
    let oneYearGrossIncome = firstWeekEarnedGrossIncome * 52;
    return Math.round(oneYearGrossIncome)
}

function getProperTaxDeduction(taxFilingStatus){
    let standardDeduction = [12950, 25900, 12950, 19400]
    if (taxFilingStatus === 'single'){
        return standardDeduction[0]
    } else if (taxFilingStatus === 'jointly'){
        return standardDeduction[1]
    } else if ( taxFilingStatus === 'marriedButSeparately'){
        return standardDeduction[2]
    } else {
        return standardDeduction[3]
    }
}

function grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs) {
    let standardDeduction = getProperTaxDeduction(taxFilingStatus)
    let oneYearGrossIncome = oneYearGrossIncomeForTaxFigures(wageCalculatorInputs)
    if (oneYearGrossIncome >= standardDeduction) {
        return  oneYearGrossIncome - standardDeduction
    } else {
        return oneYearGrossIncome
    }
}

function getProperTaxFields(taxFilingStatus){

    if (taxFilingStatus === 'single'){
        return incomeTaxLimitsSingle
    } else if (taxFilingStatus === 'jointly'){
        return incomeTaxLimitsJointly
    } else if (taxFilingStatus === 'marriedButSeparately') {
        return incomeTaxLimitsMarriedButSeparately
    } else {
        return incomeTaxLimitsHeadOfHousehold
    }
}

function figuringTaxPercentRateOnIncome (taxFilingStatus, wageCalculatorInputs, rates, ) {
    cc(rates);
    let oneYearGrossIncomeAfterDeduction = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs);
    let taxLimitRates = getProperTaxFields(taxFilingStatus);
    cc(oneYearGrossIncomeAfterDeduction);
    cc(taxLimitRates);

}

// limitsSingleReturn: [0, 10275, 41755, 89075, 170050, 215950, 539900],
//     limitsMarriedJointReturn: [0, 20550, 83550, 178150, 340100, 431900, 647850],
//     limitsMarriedSeparateReturns: [0, 10275, 41775, 89075, 170050, 215950, 323925],
//     limitsHeadOfHouseholdReturn: [0, 14200, 54200, 86350, 164900, 209400, 523600],
//     rates: [10, 12, 22, 24, 32, 35, 37],
// standardDeduction: {
//     marriedJointReturn: 25900,
//         marriedSeparateReturns: 12950,
//         headOfHousehold: 19400,
//         singleReturn: 12950,

