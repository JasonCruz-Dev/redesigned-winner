  /*
    Date:          02/28/22
    Developer:     Jason Cruz
    Email:         jasoncruz.dev@gmail.com

  */
  
//Get a reference to a button
const button = document.getElementById("generate");

//Run the function once the button is clicked
button.onclick = function generate(){
   
    // Create a variable to hold a random number between 1 and 10000
    const randomNum = Math.floor((Math.random() * 10000) + 1);

    // Create a variable el to hold the ranNum element
    const el = document.getElementById('randNum');

    // Write the number into that element also add a comma every 3 integers
    el.innerHTML = randomNum.toLocaleString('en-US');
 }
