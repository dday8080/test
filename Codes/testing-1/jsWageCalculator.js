// Wage Calculator JS
//cc(document.getElementById("input-values", "inputPerHour", "inputHoursWeek").addEventListener("click", function () {
   // form.submit();
//}));
let element = document.getElementById('wageCalculator');
let cc = console.log;
element.innerHTML += 'jsWageCalculator';

let form = document.getElementById("inputValues");

let wageCalculatorInputs ;

let incomeTaxLimitsHeadOfHousehold = [0, 14200, 54200, 86350, 164900, 209400, 523600];
let incomeTaxLimitsMarriedButSeperately = [0, 10275, 41775, 89075, 170050, 215950, 323925];
let incomeTaxLimitsJointly = [0, 20550, 83550, 178150, 340100, 431900, 647850];
let incomeTaxLimitsSingle = [0, 10275, 41755, 89075, 170050, 215950, 539900];
let rates = [10, 12, 22, 24, 32, 35, 37];

form.onclick = (e) => {
    e.preventDefault();
        let wagePerHour = document.querySelector("#inputPerHour").value;
        let hoursWorkedPerWeek = document.querySelector("#inputHoursWeek").value;
        let overtimeReceived = document.querySelector("#overtime").checked;
        let taxFilingStatus = document.querySelector("input[type='radio'][name=taxFilingStatus]:checked").value;
        let taxfilingform = document.querySelector("input[type='radio'][name=w2or1099]:checked").value;
        let wageCalculatorInputs = [wagePerHour, hoursWorkedPerWeek, overtimeReceived];
        
        cc(taxfilingform);// get rid of after done
        cc(taxFilingStatus);// get rid of after done
    handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxfilingform);
    
}
function handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxfilingform){
    
    
    grossIncomePrintToHtml(wageCalculatorInputs)
    netIncomePrintToHtml(wageCalculatorInputs)
    getProperTaxFields(taxFilingStatus)
    getProperTaxDeduction(taxFilingStatus)
    getProperTaxForms(taxfilingform)
    oneYearGrossIncomeForTaxFigures(wageCalculatorInputs)
    cc(grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs));
    cc(figuringTaxPercentRateonIncome (taxFilingStatus, wageCalculatorInputs));
    
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
    hoursWorkedPerWeek = addInOvertime(wageCalculatorInputs)
    let firstWeekEarnedNetIncome = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];

    document.querySelector("#secondWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 2);
    document.querySelector("#oneMonthNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 4);
    document.querySelector("#oneYearNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 52);
    document.querySelector("#firstWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome);
}

function addInOvertime(wageCalculatorInputs){
    if (wageCalculatorInputs[2] == false) {
        if (wageCalculatorInputs[1] > 40) {
            return wageCalculatorInputs[3] = (wageCalculatorInputs[1] - 40)  * 1.5 + 40
        } else {
            return wageCalculatorInputs[1]
        }
    } else {
        return wageCalculatorInputs[1]
    }
}

function getProperTaxForms(taxfilingform){
    if (taxfilingform == 'w2' || null || undefined){
        return // fill in with fica and SS fields for W2s
    }   else {
    return //fill with 1099 fica and SS fields
    } 
}



//let standardDeduction = getProperTaxFields(taxFilingStatus);
let oneYearGrossIncome ; 


function getProperTaxFields(taxFilingStatus){
    
    if (taxFilingStatus == 'single'){
        return incomeTaxLimitsSingle
    } else if (taxFilingStatus == 'jointly'){
        return incomeTaxLimitsJointly 
    } else if (taxFilingStatus == 'marriedButSeperately') {
        return incomeTaxLimitsMarriedButSeperately
    } else {
        return incomeTaxLimitsHeadOfHousehold 
    }
}
function getProperTaxDeduction(taxFilingStatus){
    let standardDeduction = [12950, 25900, 12950, 19400]
    if (taxFilingStatus == 'single'){
        return standardDeduction[0]
    } else if (taxFilingStatus == 'jointly'){
        return standardDeduction[1]
    } else if ( taxFilingStatus == 'marriedButSeperately'){
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
    standardDeduction = getProperTaxDeduction(taxFilingStatus)
    oneYearGrossIncome = oneYearGrossIncomeForTaxFigures(wageCalculatorInputs)
       if (oneYearGrossIncome >= standardDeduction) { 
       return oneYearGrossIncomeAfterDeduction = oneYearGrossIncome - standardDeduction
    } else { return oneYearGrossIncome
    }
}
function figuringTaxPercentRateonIncome (taxFilingStatus, wageCalculatorInputs) {
    cc(rates);
    cc(oneYearGrossIncomeAfterDeduction = grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs));
    cc(taxlimitRates = getProperTaxFields(taxFilingStatus))
    
       
        
       
}





/* refrence / use what i need for tax info
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
                ficaW2: {
                    medicare: {
                        percent: 1.45,
                    },
                    socsec: {
                        percent: 6.2, || 9114
                        cutoff: 147000, // 9114 is 6.2% of 147000
                    }
                },
                fica1099: {
                    medicare: {
                        percent: 2.9,
                        reverseCutoffMarriedJointReturn: 250000,
                        reverseCutoffMarriedSeparateReturns: 125000,
                        reverseCutoffSingleHohReturn: 200000,
                        reverseCutoffPercent: 0.9,
                    },
                    socsec: {
                        percent: 12.4,
                        cutoff: 147000,
                    }
                },
            },
        }



    brackets = {
        y22: {
            single: {
                rates: [10, 12, 22, 24, 32, 35, 37],
                limits: [10275, 41755, 89075, 170050, 215950, ],
            },
            marriedJointReturn: {
                rates: [],
                limits: [],
            },
            marredSeparateReturns: {
                rates: [],
                limits: [],
            },
            headOfHousehold: {
                rates: [],
                limits: [],
            },
            standardDeduction: {
                marriedJointReturn: 25900,
                marriedSeparateReturns: 12950,
                headOfHousehold: 19400,
                singleReturn: 12950,
            },
            ficaW2: {
                medicare: {
                    percent: 1.45,
                },
                socsec: {
                    percent: 6.2,
                    cutoff: 147000,
                    reverseCutoffPercent: 0.9,
                }
            },
            fica1099: {
                medicare: {
                    percent: 2.9,
                    reverseCutoffMarriedJointReturn: 250000,
                    reverseCutoffMarriedSeparateReturns: 125000,
                    reverseCutoffSingleHohReturn: 200000,
                },
            },
        }
    }


*/


