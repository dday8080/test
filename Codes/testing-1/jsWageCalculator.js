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
    
    handleClicksGross(inputs);
    //cc(inputHoursWeek * inputPerHour);
   // document.getElementById('print').innerHTML=inputPerHour;
   // document.getElementById('printer').innerHTML=inputHoursWeek;
   return inputs;
}

function handleClicksGross(inputs){
    
//    inputs[1] = function addInOvertime(inputs){
//     if (inputs[2] == false) {
//         if (inputs[1] > 40) {
//             let x = inputs[1] - 40
//             return inputs[1] = (x * 1.5) + 40
//         }else {return +inputs[1]}
//     } else {return +inputs[1]}
    
//}
    
    let firstWeekGross = inputs[0] * inputs[1];

    //let twoWeeksGross = Math.round ( firstWeekGross * 2);
document.getElementById("2WeeksGross").innerHTML=Math.round(firstWeekGross * 2); 
    //let oneMonthGross = Math.round(firstWeekGross * 4);
document.getElementById('1MonthGross').innerHTML=Math.round(firstWeekGross * 4);
    //let oneYearGross = Math.round(firstWeekGross * 52);
document.getElementById('1YearGross').innerHTML=Math.round(firstWeekGross * 52);
        firstWeekGross = Math.round(firstWeekGross);// tested top
document.getElementById('1WeekGross').innerHTML=firstWeekGross;//tested top

}

//function handleClicksGross (inputs)

 

