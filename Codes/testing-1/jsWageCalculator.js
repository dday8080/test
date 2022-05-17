// Wage Calculator JS
//cc(document.getElementById("input-values", "inputPerHour", "inputHoursWeek").addEventListener("click", function () {
   // form.submit();
//}));
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






















       

/*
        function grossIncomePrintToHtml(wageCalculatorInputs){
            hoursWorkedPerWeek = accountingForOvertime(wageCalculatorInputs);
          
            let firstWeekEarnedGrossIncome = wagePerHour * hoursWorkedPerWeek;
          
            document.getElementById("2WeekEarnedGross").innerHTML=Math.round(firstWeekEarnedGrossIncome * 2);
            document.getElementById('1MonthEarnedGross').innerHTML=Math.round(firstWeekEarnedGrossIncome * 4);
            document.getElementById('1YearEarnedGross').innerHTML=Math.round(firstWeekEarnedGrossIncome * 52);
            document.getElementById('1WeekEarnedGross').innerHTML=Math.round(firstWeekEarnedGrossIncome)
          }
          
        function accountingForOvertime(wageCalculatorInputs){
            if (overtimeReceived == false) {
                if (hoursWorkedPerWeek > 40) {
                    return hoursWorkedPerWeek = (hoursWorkedPerWeek - 40) * 1.5 + 40
                } else {
                    return hoursWorkedPerWeek
                }
            } else {
                return hoursWorkedPerWeek
            }
        }

          */