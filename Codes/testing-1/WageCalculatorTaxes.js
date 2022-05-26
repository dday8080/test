

// state taxes come out first then deduction, fica and federal

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
        return  oneYearGrossIncome - standardDeduction
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


function figuringFederalTaxOnIncome (rates, taxFilingStatus, wageCalculatorInputs) {
    cc(rates);
    let oneYearGrossIncomeAfterDeduction = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs);
    let incomeTaxCutoff = getProperTaxFields(taxFilingStatus);
    cc(oneYearGrossIncomeAfterDeduction);
    cc(incomeTaxCutoff);
    let combinedTaxCosts = incomeTaxCutoff[1] * rates[0] / 100;

    if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[0]){
        return 0
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[1]) {
        return oneYearGrossIncomeAfterDeduction * rates[0] / 100
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[2]) {
        return combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [1]) * rates[1] / 100
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[3]) {
        combinedTaxCosts += (incomeTaxCutoff[2] - incomeTaxCutoff [1]) * rates[1] / 100
        return  combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [2]) * rates[2] / 100
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[4]) {
        combinedTaxCosts += (incomeTaxCutoff[2] - incomeTaxCutoff [1]) * rates[1] / 100
        combinedTaxCosts += (incomeTaxCutoff[3] - incomeTaxCutoff[2]) * rates[2] / 100
        return combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [3]) * rates[3] / 100
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[5]) {
        combinedTaxCosts += (incomeTaxCutoff[2] - incomeTaxCutoff [1]) * rates[1] / 100
        combinedTaxCosts += (incomeTaxCutoff[3] - incomeTaxCutoff[2]) * rates[2] / 100
        combinedTaxCosts += (incomeTaxCutoff[4] - incomeTaxCutoff[3]) * rates[3] / 100
        return combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [4]) * rates[4] / 100
    } else if (oneYearGrossIncomeAfterDeduction <= incomeTaxCutoff[6]) {
        combinedTaxCosts += (incomeTaxCutoff[2] - incomeTaxCutoff [1]) * rates[1] / 100
        combinedTaxCosts += (incomeTaxCutoff[3] - incomeTaxCutoff[2]) * rates[2] / 100
        combinedTaxCosts += (incomeTaxCutoff[4] - incomeTaxCutoff[3]) * rates[3] / 100
        combinedTaxCosts += (incomeTaxCutoff[5] - incomeTaxCutoff[4]) * rates[4] / 100
        return combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [5]) * rates[5] / 100
    } else {
        combinedTaxCosts += (incomeTaxCutoff[2] - incomeTaxCutoff [1]) * rates[1] / 100
        combinedTaxCosts += (incomeTaxCutoff[3] - incomeTaxCutoff[2]) * rates[2] / 100
        combinedTaxCosts += (incomeTaxCutoff[4] - incomeTaxCutoff[3]) * rates[3] / 100
        combinedTaxCosts += (incomeTaxCutoff[5] - incomeTaxCutoff[4]) * rates[4] / 100
        combinedTaxCosts += (incomeTaxCutoff[6] - incomeTaxCutoff[5]) * rates[5] / 100
        return combinedTaxCosts + (oneYearGrossIncomeAfterDeduction - incomeTaxCutoff [6]) * rates[6] / 100
    }
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

