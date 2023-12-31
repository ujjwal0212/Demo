let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value= parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value= parseFloat( output.toFixed(2));
}
function KelTocel(){
    let output = (parseFloat(kelvin.value)-273.45);
    celsius.value = parseFloat(output.toFixed(2));
}
function celToKel(){
    let output = (parseFloat(celsius.value)+273.45);
    kelvin.value = parseFloat(output.toFixed(2));
}
function farTokel(){
    let o= ((parseFloat(fahrenheit.value)+459.67)* 5/9);
    kelvin.value=parseFloat(o.toFixed(2));
}
function KelTofar(){
    let output = (parseFloat(kelvin.value)* 9/5)-459.67;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
