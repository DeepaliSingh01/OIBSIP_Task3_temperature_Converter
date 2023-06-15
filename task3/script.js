function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
  
    if (isNaN(temperature)) {
      resultElement.innerHTML = "Please enter a valid number.";
      return;
    }
  
    if (unit === "celsius") {
      var fahrenheit = (temperature * 9 / 5) + 32;
      var kelvin = temperature + 273.15;
      resultElement.innerHTML = temperature + " °C is " + fahrenheit.toFixed(2) + " °F and " + kelvin.toFixed(2) + " K.";
    } else if (unit === "fahrenheit") {
      var celsius = (temperature - 32) * 5 / 9;
      var kelvin = (temperature - 32) * 5 / 9 + 273.15;
      resultElement.innerHTML = temperature + " °F is " + celsius.toFixed(2) + " °C and " + kelvin.toFixed(2) + " K.";
    } else if (unit === "kelvin") {
      var celsius = temperature - 273.15;
      var fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
      resultElement.innerHTML = temperature + " K is " + celsius.toFixed(2) + " °C and " + fahrenheit.toFixed(2) + " °F.";
    }
  }