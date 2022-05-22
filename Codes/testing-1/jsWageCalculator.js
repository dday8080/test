

let cc = console.log;
let form = document.getElementById("inputValues");

let incomeTaxLimitsHeadOfHousehold = [0, 14200, 54200, 86350, 164900, 209400, 523600];
let incomeTaxLimitsMarriedButSeparately = [0, 10275, 41775, 89075, 170050, 215950, 323925];
let incomeTaxLimitsJointly = [0, 20550, 83550, 178150, 340100, 431900, 647850];
let incomeTaxLimitsSingle = [0, 10275, 41755, 89075, 170050, 215950, 539900];
let rates = [10, 12, 22, 24, 32, 35, 37];
let ficaW2SocSec = 6.2;
let ficaW2Medicare = 1.45;
let ficaW2 = ficaW2Medicare + ficaW2SocSec;
let ficaW2MedicareAfterCutoff = 2.35
let fica1099SocSec = 12.4;
let fica1099Medicare = 2.9;
let fica1099 =  fica1099Medicare + fica1099SocSec;
let fica1099MedicareAfterCutoff = 3.8
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
    cc(medicareTaxFields(taxFilingStatus));
    cc(getProperTaxForms(taxFilingForm, ficaW2, fica1099, ficaSocSecCutoff));
    cc(oneYearGrossIncomeForTaxFigures(wageCalculatorInputs));
    grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs)
    figuringTaxPercentRateOnIncome (taxFilingStatus, wageCalculatorInputs)
    cc(applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, ficaW2, fica1099, ficaSocSecCutoff, ficaW2Medicare,
        ficaW2MedicareAfterCutoff, ficaW2SocSec, fica1099Medicare, fica1099MedicareAfterCutoff, fica1099SocSec));

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
    //document.querySelector("#w2or1099Expenses").innerHTML=Math.round(ficaExpenses);
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




