// Wage Calculator JS
//cc(document.getElementById("input-values", "inputPerHour", "inputHoursWeek").addEventListener("click", function () {
   // form.submit();
//}));
let element = document.getElementById('wageCalculator');

let cc = console.log;

element.innerHTML += 'jsWageCalculator';

let form = document.getElementById("inputValues");
let inputs ;

form.onclick = function(e) {
    e.preventDefault();
        let inputPerHour = document.querySelector("#inputPerHour").value;
        let inputHoursWeek = document.querySelector("#inputHoursWeek").value;
        let overtime = document.querySelector("#overtime");
        let inputs = [inputPerHour, inputHoursWeek, overtime];

    cc(inputPerHour);
    cc(inputHoursWeek);
    cc(overtime);
    handleClicks(inputs);
    //cc(inputHoursWeek * inputPerHour);
   // document.getElementById('print').innerHTML=inputPerHour;
   // document.getElementById('printer').innerHTML=inputHoursWeek;
   return inputs;
}

function handleClicks(inputs){
    let firstWeekGross = inputs[0] * inputs[1];

    let twoWeeksGross = Math.round ( firstWeekGross * 2);
document.getElementById("2WeeksGross").innerHTML=twoWeeksGross; 
    let oneMonthGross = Math.round(firstWeekGross * 4);
document.getElementById('1MonthGross').innerHTML=oneMonthGross;
    let oneYearGross = Math.round(firstWeekGross * 52);
document.getElementById('1YearGross').innerHTML=oneYearGross;
        firstWeekGross = Math.round(firstWeekGross);// tested top
document.getElementById('1WeekGross').innerHTML=firstWeekGross;//tested top
 
}






