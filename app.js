//converting kg to pound
//.toFixed(2) will round upto 2 decimal places
document.getElementById('weight-input').addEventListener('input', function (e) {
    let kgs = e.target.value;
    document.getElementById('weight-output').innerHTML = (kgs * 2.20).toFixed(2);
});

//converting feet to centimeter
document.getElementById('measurement-input').addEventListener('input', function (e) {
    let feet = e.target.value;
    document.getElementById('measurement-output').innerHTML = (feet * 30.48).toFixed(2);
});

//converting celsius to fahrenheit
document.getElementById('temperature-input').addEventListener('input', function (e) {
    let celsius = e.target.value;
    let fahrenheit = document.getElementById('temperature-output');
    if(celsius === '') fahrenheit.innerHTML = 0.00;
    else fahrenheit.innerHTML = ((celsius * 1.8) + 32).toFixed(2);
});