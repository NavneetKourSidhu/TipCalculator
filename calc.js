//Calculate Tip
function calculateTip()
{
    var billamt= document.getElementById("billamt").value;
    var Service = document.getElementById("Service").value;
    var People = document.getElementById("People").value;

//Validate input

if (billamt === "" || Service == 0) 
  {
    alert("Please enter values");
    return;
  }

  if (People === "" || People <= 1)
  {
    People = 1;
    document.getElementById("each").style.display = "none";
  } 
  else 
  {
    document.getElementById("each").style.display = "block";
  }

  //Calculate Tip

  var total = (billamt*Service)/People;
  total = Math.round(total*100) /100;
  total = total.toFixed(2);

  document.getElementById("totaltip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
  //Hide the tip amount on load
  document.getElementById("totaltip").style.display = "none";
  document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() 
{
  calculateTip();

};

