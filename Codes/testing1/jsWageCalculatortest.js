var cc = console.log;
var form = document.querySelector("#inputValues");

var incomeTaxLimitsHeadOfHousehold = [0, 14200, 54200, 86350, 164900, 209400, 523600];
var incomeTaxLimitsMarriedButSeparately = [0, 10275, 41775, 89075, 170050, 215950, 323925];
var incomeTaxLimitsJointly = [0, 20550, 83550, 178150, 340100, 431900, 647850];
var incomeTaxLimitsSingle = [0, 10275, 41755, 89075, 170050, 215950, 539900];
var rates = [10, 12, 22, 24, 32, 35, 37];
var ficaW2SocSec = 6.2;
var ficaW2Medicare = 1.45;
var ficaW2 = ficaW2Medicare + ficaW2SocSec;
var ficaW2MedicareAfterCutoff = 2.35
var fica1099SocSec = 12.4;
var fica1099Medicare = 2.9;
var fica1099 =  fica1099Medicare + fica1099SocSec;
var fica1099MedicareAfterCutoff = 3.8
var ficaSocSecCutoff = 147000;
//var grossSubFicaIncome = incomeSubFica();

form.onclick = (e) => {
    e.preventDefault();
    let wagePerHour = +document.querySelector("#inputPerHour").value;
    let hoursWorkedPerWeek = document.querySelector("#inputHoursWeek").value;
    let overtimeReceived = document.querySelector("#overtime").checked;
    let stateIncomeTax = +document.querySelector("#stateTax").value;
    let taxFilingStatus = document.querySelector("input[type='radio'][name=taxFilingStatus]:checked").value;
    let taxFilingForm = document.querySelector("input[type='radio'][name=w2or1099]:checked").value;
    let wageCalculatorInputs = [wagePerHour, hoursWorkedPerWeek, overtimeReceived];
    handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxFilingForm, stateIncomeTax);

}

function handlesOnClick(wageCalculatorInputs, taxFilingStatus, taxFilingForm, stateIncomeTax){
    grossIncomePrintToHtml(wageCalculatorInputs)
    netIncomePrintToHtml(rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax)
    getProperTaxFields(taxFilingStatus)
    getProperTaxDeduction(taxFilingStatus);
    cc(oneYearGrossIncomeForTaxFigures(wageCalculatorInputs, stateIncomeTax))
    incomeSubFica(wageCalculatorInputs, taxFilingForm, taxFilingStatus);
    breakDownExpensesPrintToHtml (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax)

    cc(getProperTaxDeduction(taxFilingStatus));
    cc(grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs, stateIncomeTax))
    cc(figuringFederalTaxOnIncome (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax))
    cc(differenceFromGrossWithStateTax (wageCalculatorInputs, stateIncomeTax))
    cc(applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax))
    cc(getAllExpenses(rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax))
}

function grossIncomePrintToHtml(wageCalculatorInputs) {
    wageCalculatorInputs[1] = addInOvertime(wageCalculatorInputs);
    let firstWeekGross = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];
    document.getElementById("2WeeksGross").innerHTML=Math.round(firstWeekGross * 2);
    document.getElementById('1MonthGross').innerHTML=Math.round(firstWeekGross * 4);
    document.getElementById('1YearGross').innerHTML=Math.round(firstWeekGross * 52);
    document.getElementById('1WeekGross').innerHTML=Math.round(firstWeekGross);
}

function netIncomePrintToHtml(rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax) {
    addInOvertime(wageCalculatorInputs)
    let taxBurden = getAllExpenses(rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax)
    cc(taxBurden)
    let firstWeekEarnedNetIncome = (wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1]) - (taxBurden / 52);
    document.querySelector("#secondWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 2);
    document.querySelector("#oneMonthNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 4);
    document.querySelector("#oneYearNet").innerHTML=Math.round(firstWeekEarnedNetIncome * 52);
    document.querySelector("#firstWeekNet").innerHTML=Math.round(firstWeekEarnedNetIncome);
    document.querySelector("#combinedExpense").innerHTML=Math.round(taxBurden);
}

function breakDownExpensesPrintToHtml (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax) {
    let federalTax = +figuringFederalTaxOnIncome (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax);
    let stateTax = +differenceFromGrossWithStateTax (wageCalculatorInputs, stateIncomeTax);
    let fica = +applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax);
    fica = fica / 52;
    stateTax = stateTax / 52;
    federalTax = federalTax / 52;
    document.querySelector("#weekW2or1099Expenses").innerHTML=Math.round(fica);
    document.querySelector("#biW2or1099Expenses").innerHTML=Math.round(fica * 2);
    document.querySelector("#monthW2or1099Expenses").innerHTML=Math.round(fica * 4);
    document.querySelector("#yearW2or1099Expenses").innerHTML=Math.round(fica * 52);

    document.querySelector("#weekStateTaxCost").innerHTML=Math.round(stateTax);
    document.querySelector("#biStateTaxCost").innerHTML=Math.round(stateTax * 2);
    document.querySelector("#monthStateTaxCost").innerHTML=Math.round(stateTax * 4);
    document.querySelector("#yearStateTaxCost").innerHTML=Math.round(stateTax * 52);

    document.querySelector("#weekFederalTaxCost").innerHTML=Math.round(federalTax);
    document.querySelector("#biFederalTaxCost").innerHTML=Math.round(federalTax * 2);
    document.querySelector("#monthFederalTaxCost").innerHTML=Math.round(federalTax * 4);
    document.querySelector("#yearFederalTaxCost").innerHTML=Math.round(federalTax * 52);



}

function getAllExpenses(rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax) {
    let federalTax = +figuringFederalTaxOnIncome (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax);
    let stateTax = +differenceFromGrossWithStateTax (wageCalculatorInputs, stateIncomeTax);
    let fica = +applyFicaToGrossIncome(wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax);
    return federalTax + stateTax + fica
}

function addInOvertime(wageCalculatorInputs){

    if (wageCalculatorInputs[2] === true) {
        if (wageCalculatorInputs[1] > 40) {
            return wageCalculatorInputs[3] = (wageCalculatorInputs[1] - 40)  * 1.5 + 40
        } else {
            return wageCalculatorInputs[1]
        }
    } else {
        return wageCalculatorInputs[1]
    }
}



