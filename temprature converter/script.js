const tempConvert = () => {
   
   // Getting inputs and info from DOM
   tempInp = document.getElementById("temp-inp").value;
   tempSel = document.getElementById("temp-sel").value;
   result1 = document.getElementById("result1")
   result2 = document.getElementById("result2")

   // Some Basic Checks
   if (tempSel == "cel") {
      // Cel to Fah
      result1.innerHTML = `${(tempInp*9/5) + 32}°Fahrenheit`;
      // Cel to Kel
      result2.innerHTML = `${tempInp + 273.15}°Kelvin`;
   }
   if (tempSel == "fah") {
      // Fah to Cel
      result1.innerHTML = `${(tempInp - 32) * 5/9}°Celsius`;
      // Fah to Kel
      result2.innerHTML = `${(tempInp - 32) * 5/9 + 273.15}°Kelvin`;
   }
   if (tempSel == "kel") {
      // Kel to Cel
      result1.innerHTML = `${tempInp - 273.15}°Celsius`
      // Kel to Fah
      result2.innerHTML = `${(tempInp - 273.15) * 9/5 + 32}°Fahrenheit`
   }

}