

function medicareTaxFields(taxFilingStatus){
    if (taxFilingStatus === 'single'){
        return 200000
    } else if (taxFilingStatus === 'jointly'){
        return 250000
    } else if (taxFilingStatus === 'marriedButSeparately') {
        return 125000
    } else {
        return 250000
    }
}

function getProperTaxForms(taxFilingForm, ficaW2, fica1099){
    if (taxFilingForm === 'w2' || null || undefined){
        return ficaW2
    }   else {
        return fica1099
    }
}
// let grossSubFicaIncome = incomeSubFica();
// cc(applyFicaToGrossIncome);
// function incomeSubFica (applyFicaToGrossIncome, grossIncomeAfterDeduction) {
//     let sub = applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, ficaW2, fica1099, ficaSocSecCutoff,
//         ficaW2Medicare, ficaW2MedicareAfterCutoff, ficaW2SocSec, fica1099Medicare, fica1099MedicareAfterCutoff, fica1099SocSec);
//     let gross = grossIncomeAfterDeduction();
//     return gross - sub
// }


function applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, ficaW2, fica1099, ficaSocSecCutoff,
    ficaW2Medicare, ficaW2MedicareAfterCutoff, ficaW2SocSec, fica1099Medicare, fica1099MedicareAfterCutoff, fica1099SocSec) {
    grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs)
    let fica = getProperTaxForms(taxFilingForm, ficaW2, fica1099, ficaSocSecCutoff)
    let oneYearGrossIncome = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs)
    let medicareCutoff = medicareTaxFields(taxFilingStatus);
    let ficaBurden;


    if (fica === ficaW2){
        if (oneYearGrossIncome > medicareCutoff) {
            if (oneYearGrossIncome > ficaSocSecCutoff){
                ficaBurden = medicareCutoff * ficaW2Medicare / 100
                ficaBurden += (oneYearGrossIncome - medicareCutoff) * ficaW2MedicareAfterCutoff / 100
                return ficaBurden + (ficaSocSecCutoff * ficaW2SocSec) / 100
            }
            ficaBurden = medicareCutoff * ficaW2Medicare / 100
            ficaBurden += (oneYearGrossIncome - medicareCutoff) * ficaW2MedicareAfterCutoff / 100
            return ficaBurden + (oneYearGrossIncome * ficaW2SocSec) / 100
        } else if ( oneYearGrossIncome > ficaSocSecCutoff ){
            ficaBurden = ficaSocSecCutoff * ficaW2SocSec / 100
            return ficaBurden + ( oneYearGrossIncome * ficaW2Medicare) / 100
        } else {
            return oneYearGrossIncome * ficaW2 / 100
        }
    } else {
        if (oneYearGrossIncome > medicareCutoff) {
            if (oneYearGrossIncome > ficaSocSecCutoff){
                ficaBurden = medicareCutoff * fica1099Medicare / 100
                ficaBurden += (oneYearGrossIncome - medicareCutoff) * fica1099MedicareAfterCutoff / 100
                return ficaBurden + (ficaSocSecCutoff * fica1099SocSec) / 100
            }
            ficaBurden = medicareCutoff * fica1099Medicare / 100
            ficaBurden += (oneYearGrossIncome - medicareCutoff) * fica1099MedicareAfterCutoff / 100
            return ficaBurden + (oneYearGrossIncome * fica1099SocSec) / 100
        } else if (oneYearGrossIncome > ficaSocSecCutoff) {
            ficaBurden = ficaSocSecCutoff * fica1099SocSec / 100
            return ficaBurden + ( oneYearGrossIncome * fica1099Medicare) / 100
        }
        return oneYearGrossIncome * fica1099 / 100
    }
}
// let grossSubFicaIncome = () => {
//     let sub = applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, ficaW2, fica1099, ficaSocSecCutoff,
//         ficaW2Medicare, ficaW2MedicareAfterCutoff, ficaW2SocSec, fica1099Medicare, fica1099MedicareAfterCutoff, fica1099SocSec)
//     let gross = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs);
//     return gross - sub;
// }

 // medicareCutoffs: {
 //     reverseCutoffSingleReturns: 200000,
 //         reverseCutoffJointReturn: 250000,
 //         reverseCutoffHoh: 250000,
 //         reverseCutoffSeparateReturns: 125000,
 // ficaW2: {
 //     medicare:
 //         percent: 1.45,
 //             percentageAfterReverseCutoff: 2.35,
 //     },
 //     socSec: {
 //         percent: 6.2,
 //             cutoff: 147000,
 //     }
 // },
 // fica1099: {
 //     medicare: {
 //         percent: 2.9,
 //             percentageAfterReverseCutoff: 3.8,
 //     },
 //     socSec: {
 //         percent: 12.4,
 //             cutoff: 147000,
