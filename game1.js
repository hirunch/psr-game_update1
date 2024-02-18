let playgame = confirm("Do you like to a play game? ");

if(playgame){

  let userinput = window.prompt(`Enter "paper", "scissor" or "rock":  `);
  let trimu = userinput.trim(" ");
  let userword = trimu.toLowerCase();


  if (userword === "paper" ||
  userword === "rock" || userword === "scissor") {

        const computerInput = Math.floor(Math.random() * 3);

        const myArray = ["paper", "scissor", "rock"];
      
        const computer = myArray[computerInput];

        if(userword === computer){

          alert("It's Tie Game! \n Try again!...");
          location.reload();
        }
        else if (userword === "paper" && computer === "rock" || 
        userword === "rock" && computer === "scissor" ||
        userword === "scissor" && computer === "paper") {

          alert(`you Win! \n computer choose: ${computer} \n you choose: ${userword}`);
        }

        else {

          alert(`you Lose ! \n computer choose: ${computer} \n you choose: ${userword}`);
        }

          if(playgame){
            location.reload();
          }
          else {
            alert("Thanks for Palying!");
          }



      }

      else {
        alert(`Invalid ${userinput} in  this word \n try again!..`);
        location.reload();
      }


}
else {

  alert("Thanks for Visiting!");
}