// Wage Calculator JS
//cc(document.getElementById("input-values", "inputPerHour", "inputHoursWeek").addEventListener("click", function () {
   // form.submit();
//}));
let element = document.getElementById('wageCalculator');
let cc = console.log;
element.innerHTML += 'jsWageCalculator';

let form = document.getElementById("inputValues");


let incomeTaxLimitsHeadOfHousehold = [0, 14200, 54200, 86350, 164900, 209400, 523600];
let incomeTaxLimitsMarriedButSeparately = [0, 10275, 41775, 89075, 170050, 215950, 323925];
let incomeTaxLimitsJointly = [0, 20550, 83550, 178150, 340100, 431900, 647850];
let incomeTaxLimitsSingle = [0, 10275, 41755, 89075, 170050, 215950, 539900];
let rates = [10, 12, 22, 24, 32, 35, 37];
let ficaW2SocSec = 6.2;
let ficaW2Medicare = 1.45;
let ficaW2 = ficaW2Medicare + ficaW2SocSec;
let fica1099SocSec = 12.4;
let fica1099Medicare = 2.9;
let fica1099 =  fica1099Medicare + fica1099SocSec;
let ficaSocSecCutoff = 147000;


form.onclick = (e) => {
    e.preventDefault();
        let wagePerHour = document.querySelector("#inputPerHour").value;
        let hoursWorkedPerWeek = document.querySelector("#inputHoursWeek").value;
        let overtimeReceived = document.querySelector("#overtime").checked;
        let taxFilingStatus = document.querySelector("input[type='radio'][name=taxFilingStatus]:checked").value;
        let taxFilingForm = document.querySelector("input[type='radio'][name=w2or1099]:checked").value;
        let wageCalculatorInputs = [wagePerHour, hoursWorkedPerWeek, overtimeReceived];
        
        cc(taxFilingForm);// get rid of after done
        cc(taxFilingStatus);// get rid of after done
    handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxFilingForm);
    
}
function handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxFilingForm){
    
    
    grossIncomePrintToHtml(wageCalculatorInputs)
    netIncomePrintToHtml(wageCalculatorInputs)
    getProperTaxFields(taxFilingStatus)
    getProperTaxDeduction(taxFilingStatus)
    medicareTaxFields(taxFilingStatus)
    cc(getProperTaxForms(taxFilingForm, ficaW2, fica1099, ficaSocSecCutoff));
    cc(oneYearGrossIncomeForTaxFigures(wageCalculatorInputs));
    cc(grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs));
    cc(figuringTaxPercentRateOnIncome (taxFilingStatus, wageCalculatorInputs));
    cc(applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm ));


}

function grossIncomePrintToHtml(wageCalculatorInputs) {
    cc(wageCalculatorInputs);// get rid of after done
    wageCalculatorInputs[1] = addInOvertime(wageCalculatorInputs);
          
    let firstWeekGross = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];
    
    document.getElementById("2WeeksGross").innerHTML=Math.round(firstWeekGross * 2); 
    document.getElementById('1MonthGross').innerHTML=Math.round(firstWeekGross * 4);
    document.getElementById('1YearGross').innerHTML=Math.round(firstWeekGross * 52);
    document.getElementById('1WeekGross').innerHTML=Math.round(firstWeekGross);//tested top
}

function netIncomePrintToHtml(wageCalculatorInputs) {
    addInOvertime(wageCalculatorInputs)
    let firstWeekEarnedNetIncome = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];

    document.querySelector("#secondWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 2);
    document.querySelector("#oneMonthNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 4);
    document.querySelector("#oneYearNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 52);
    document.querySelector("#firstWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome);
}

function addInOvertime(wageCalculatorInputs){
    if (wageCalculatorInputs[2] === false) {
        if (wageCalculatorInputs[1] > 40) {
            return wageCalculatorInputs[3] = (wageCalculatorInputs[1] - 40)  * 1.5 + 40
        } else {
            return wageCalculatorInputs[1]
        }
    } else {
        return wageCalculatorInputs[1]
    }
}

function getProperTaxForms(taxFilingForm, ficaW2, fica1099){
    if (taxFilingForm === 'w2' || null || undefined){
        return ficaW2
    }   else {
    return fica1099
    }
}
// medicareCutoffs: {
//     reverseCutoffSingleReturns: 200000,
//         reverseCutoffJointReturn: 250000,
//         reverseCutoffHoh: 250000,
//         reverseCutoffSeparateReturns: 125000,
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


function applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus ){
    let fica = getProperTaxForms(taxFilingForm, ficaW2, fica1099, ficaSocSecCutoff)
    let oneYearGrossIncome = oneYearGrossIncomeForTaxFigures(wageCalculatorInputs)
    let medicareCutoff = medicareTaxFields(taxFilingStatus)
    let ficaBurden;
        if (fica <= ficaW2){
            if (oneYearGrossIncome > medicareCutoff) {
                if (oneYearGrossIncome > ficaSocSecCutoff){
                    ficaBurden = medicareCutoff * 1.45 / 100
                    ficaBurden = ficaBurden + (oneYearGrossIncome - medicareCutoff) * 2.35 / 100
                    return ficaBurden = ficaBurden + (ficaSocSecCutoff * ficaW2SocSec) / 100
                }
                ficaBurden = medicareCutoff * 1.45 / 100
                ficaBurden = ficaBurden + (oneYearGrossIncome - medicareCutoff) * 2.35 / 100
                return ficaBurden = ficaBurden + (oneYearGrossIncome * ficaW2SocSec) / 100
            } else if ( oneYearGrossIncome > ficaSocSecCutoff ){
                ficaBurden = ficaSocSecCutoff * ficaW2SocSec / 100
                return ficaBurden = ficaBurden + ( oneYearGrossIncome * ficaW2Medicare) / 100
            } else {
                return ficaBurden = oneYearGrossIncome * ficaW2 / 100
            }
        }
    cc(fica)
    cc(oneYearGrossIncome)

}
// ficaW2: {
//     medicare: {250000
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


function oneYearGrossIncomeForTaxFigures(wageCalculatorInputs) {
    let firstWeekEarnedGrossIncome = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];
    let oneYearGrossIncome = firstWeekEarnedGrossIncome * 52;
        return Math.round(oneYearGrossIncome)
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
function figuringTaxPercentRateOnIncome (taxFilingStatus, wageCalculatorInputs) {
    cc(rates);
    let oneYearGrossIncomeAfterDeduction = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs);
    let taxLimitRates = getProperTaxFields(taxFilingStatus);
cc(oneYearGrossIncomeAfterDeduction);
cc(taxLimitRates);



}





/* reference / use what I need for tax info
y22: {
                limitsSingleReturn: [0, 10275, 41755, 89075, 170050, 215950, 539900],
                limitsMarriedJointReturn: [0, 20550, 83550, 178150, 340100, 431900, 647850],
                limitsMarriedSeparateReturns: [0, 10275, 41775, 89075, 170050, 215950, 323925],
                limitsHeadOfHouseholdReturn: [0, 14200, 54200, 86350, 164900, 209400, 523600],
                rates: [10, 12, 22, 24, 32, 35, 37],
                standardDeduction: {
                    marriedJointReturn: 25900,
                    marriedSeparateReturns: 12950,
                    headOfHousehold: 19400,
                    singleReturn: 12950,
                },
                medicareCutoffs: {
                        reverseCutoffSingleReturns: 200000,
                        reverseCutoffJointReturn: 250000,
                        reverseCutoffHoh: 250000,
                        reverseCutoffSeparateReturns: 125000,
                },
                ficaW2: {
                    medicare: {
                        percent: 1.45,
                        percentageAfterReverseCutoff: 2.35,
                    },
                    socSec: {
                        percent: 6.2,
                        cutoff: 147000,
                    }
                },
                fica1099: {
                    medicare: {
                        percent: 2.9,
                        percentageAfterReverseCutoff: 3.8,
                    },
                    socSec: {
                        percent: 12.4,
                        cutoff: 147000,
                    }
                },
            },
        }
*/


