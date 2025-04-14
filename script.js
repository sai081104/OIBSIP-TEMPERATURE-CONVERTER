function convertTemp() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(temp)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    switch (unit) {
      case "cToF":
        result = (temp * 9 / 5) + 32;
        resultDiv.textContent = `${temp}°C = ${result.toFixed(2)}°F`;
        break;
  
      case "fToC":
        result = (temp - 32) * 5 / 9;
        resultDiv.textContent = `${temp}°F = ${result.toFixed(2)}°C`;
        break;
  
      case "cToK":
        result = temp + 273.15;
        resultDiv.textContent = `${temp}°C = ${result.toFixed(2)}K`;
        break;
  
      case "kToC":
        result = temp - 273.15;
        resultDiv.textContent = `${temp}K = ${result.toFixed(2)}°C`;
        break;
  
      case "fToK":
        result = (temp - 32) * 5 / 9 + 273.15;
        resultDiv.textContent = `${temp}°F = ${result.toFixed(2)}K`;
        break;
  
      case "kToF":
        result = (temp - 273.15) * 9 / 5 + 32;
        resultDiv.textContent = `${temp}K = ${result.toFixed(2)}°F`;
        break;
  
      default:
        resultDiv.textContent = "Please select a valid conversion.";
    }
  }
  
  