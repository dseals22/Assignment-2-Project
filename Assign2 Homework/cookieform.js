 
  /* This tells Javascript to find the id selector name "submit" and assign it 
     to my function in order to populate different messages based on first 
     names when the user clicks the submit button.  */
          
      document.getElementById("submit").onclick= displayMessage;
      
  function displayMessage() {
    var message;
    var firstName= document.getElementById("firstName").value;
    switch(firstName) {
    case "Cherry":
        message="Thank You Cherry!! Your order should arrive 20 days from February 4, 2017";
        break;
    case "Micheal":
        message = "Thank You Micheal!! Your order will be coming in two weeks";
        break;
    case "Sandra":
        message = "Thank You Sandra!! You've got a big order so it will take a month.";
        break;
    case "Cookie": 
        message= "Thank You Cookie!! Your order is coming tomorrow. So be at home between 1-2pm."; 
    }
    alert(message);
    
}

    /* This finds the id selector named "sentences" and then binds it to the 
      JavaScript function in order to change the text color to red 
     when a user mouses over it.  */
  
    document.getElementsByClassName("sentences")[0].addEventListener("mouseover",
    function() { 
        this.style.color = "green";
    }, true);
   

    /* This finds the id selector named "sentences" and then binds it to the 
      JavaScript function in order to back to its original color
      when a user mouses over it.  */
   
   document.getElementsByClassName("sentences")[0].addEventListener("mouseout",
    function() { 
        this.style.color = "black";
    }, true);



