
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
    netIncomePrintToHtml(wageCalculatorInputs)
    getProperTaxFields(taxFilingStatus)
    getProperTaxDeduction(taxFilingStatus);
    cc(oneYearGrossIncomeForTaxFigures(wageCalculatorInputs, stateIncomeTax))
    let grossIncomeAfterFica = incomeSubFica(wageCalculatorInputs, taxFilingForm, taxFilingStatus);
//cc(stateIncomeTax)
    cc(getProperTaxDeduction(taxFilingStatus));
        cc(grossIncomeAfterDeduction(taxFilingStatus, wageCalculatorInputs, stateIncomeTax))
        cc(figuringFederalTaxOnIncome (rates, wageCalculatorInputs, taxFilingForm, taxFilingStatus, stateIncomeTax))
        //cc(grossIncomeAfterFica)

}

function grossIncomePrintToHtml(wageCalculatorInputs) {
    wageCalculatorInputs[1] = addInOvertime(wageCalculatorInputs);

    let firstWeekGross = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];

    document.getElementById("2WeeksGross").innerHTML=Math.round(firstWeekGross * 2);
    document.getElementById('1MonthGross').innerHTML=Math.round(firstWeekGross * 4);
    document.getElementById('1YearGross').innerHTML=Math.round(firstWeekGross * 52);
    document.getElementById('1WeekGross').innerHTML=Math.round(firstWeekGross);
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




