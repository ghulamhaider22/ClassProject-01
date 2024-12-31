const year = new Date().getFullYear()
document.getElementById('year').innerHTML= year


var cities = [
    "Faisalabad",
    "Lahore",
    "Karachi",
    "Islamabad",
    "Multan",
    "Kashmir",
    "Sheikhupura",
  ];
  
  
  // For Clear Input and Output
  document.getElementById("Clear").onclick = function () {
      document.getElementById("output").innerText = "";
    };
    document.getElementById("clear").onclick = function () {
      document.getElementById("Input").value = "";
    };
    
   
    
   
  
    // printAllcities Function
    function printAllcities() {
      document.getElementById("output").innerHTML = "";
      for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br />";
      }
    };
    for (let i = 0; i < cities.length; i++) {
      let num = i + 1;
      document.getElementById("orignal").innerHTML +=  num + ")" + cities[i] + "  ";
    }
    
    // AddCity Function
    function addCity() {
      // document.getElementById("output").innerHTML = "";
      let yourCity = document.getElementById("Input").value;
      if (yourCity.length < 3) {
      Toastify({
        text : "Please Enter The Correct Name of City"
      }).showToast();
       return;
      }
      let cityFirstLetter = yourCity.charAt(0).toUpperCase();
      let cityAllLetter = yourCity.slice(1).toLowerCase();
      let cityWord = cityFirstLetter + cityAllLetter
  
      let cityFound = false;
      for(i=0; i < cities.length; i++){
        if (cities[i] === cityWord){
          cityFound = true
          
          Toastify({
            text : `${cityWord} Is Already Added To The List`,
            backgroundColor : "red"
          }).showToast()  
        }
        }
        if(cityFound === false){
          cities.push(cityWord);
          Toastify({
            text : `${cityWord} Is SuccessFully Added`,
            backgroundColor : "green"
          }).showToast()
      }
    };
  
    function checkCity() {
      let yourCity = document.getElementById("Input").value;
      if (yourCity.length < 3) {
        Toastify({
          text : "Please Enter the correct Format" ,
          className : "warning",
          backgroundColor : "orange"
          
        }).showToast();
        
       return;
      }
      let cityFirstLetter = yourCity.charAt(0).toUpperCase();
      let cityAllLetter = yourCity.slice(1).toLowerCase();
      let cityWord = cityFirstLetter + cityAllLetter
  
      let cityFound = false;
      for(i=0; i < cities.length; i++){
        if (cities[i] === cityWord){
          cityFound = true
            Toastify({
              text : `${cityWord} Is Already in the List`,
              backgroundColor : "green"
            }).showToast()
          }
        }
        if(cityFound === false){
          Toastify({
            text : `${cityWord} Is Not Excist the Given List press add city and add your city in list`,
            backgroundColor : "blue",
      
          }).showToast()
        }
    };
    // function greetUser(){
      let userName = " GHULAM HAIDER"
      
      let now = new Date()
      let hour = now.getHours()
    
      let message = "Good "
      if (hour >= 4 && hour < 12){
        message += "Morning"
      }
      else if (hour >= 12 && hour < 17){
        message += "AfterNoon"
      }
      
      else if (hour >= 17 && hour < 20){
        message += "Evening"
      }
      else{
        message += "Night" 
      }
     message = `<span>${message}!</span> <h3> ${userName}</h3>`
    document.getElementById("navbarSupportedContent").innerHTML = message
  
   