// Wage Calculator JS

let element = document.getElementById('wageCalculator');

let cc = console.log;

element.innerHTML += 'jsWageCalculator';

let form = document.getElementById("inputValues");

form.onclick = function(e) {
    e.preventDefault();
        let inputPerHour = document.querySelector("#inputPerHour").value;
        let inputHoursWeek = document.querySelector("#inputHoursWeek").value;
        let overtime = document.querySelector("#overtime");
    cc(inputPerHour);
    cc(inputHoursWeek);
    cc(overtime);
    document.getElementById('print').innerHTML=inputPerHour;
    document.getElementById('printer').innerHTML=inputHoursWeek;
}

//cc(document.getElementById("input-values", "inputPerHour", "inputHoursWeek").addEventListener("click", function () {
   // form.submit();
//}));

cc(inputHoursWeek * inputPerHour);
let h = 'hello';