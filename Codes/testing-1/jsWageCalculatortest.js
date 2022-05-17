let element = document.getElementById('wageCalculator');
let cc = console.log;
element.innerHTML += 'jsWageCalculator';

let form = document.getElementById("inputValues");
let wageCalculatorInputs ;

form.onclick = (e) => {
    e.preventDefault();
        let wagePerHour = document.querySelector("#inputPerHour").value;
        let hoursWorkedPerWeek = document.querySelector("#inputHoursWeek").value;
        let overtimeReceived = document.querySelector("#overtime").checked;
        let wageCalculatorInputs = [wagePerHour, hoursWorkedPerWeek, overtimeReceived];
        
    handlesOnClick(wageCalculatorInputs);
    
}
function handlesOnClick(wageCalculatorInputs){
    grossIncomePrintToHtml(wageCalculatorInputs);
    netIncomePrintToHtml(wageCalculatorInputs);
    oneYearGrossIncomeForTaxFigures(wageCalculatorInputs);

}

function grossIncomePrintToHtml(wageCalculatorInputs) {
    cc(wageCalculatorInputs);
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

function oneYearGrossIncomeForTaxFigures(wageCalculatorInputs){
    let firstWeekEarnedGrossIncome = wageCalculatorInputs[0] * wageCalculatorInputs[3 && 1];
        oneYearGrossIncome = firstWeekEarnedGrossIncome * 52;
        cc(oneYearGrossIncome);
        return oneYearGrossIncome
}



