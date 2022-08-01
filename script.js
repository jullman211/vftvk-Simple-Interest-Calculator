function compute()
{
    // get values set by user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate interest from user input values
    var interest = principal * years * rate /100;
    // get current date
    var year = new Date().getFullYear()+parseInt(years);
    var total = principal + interest
    
    // net to catch invalid entries
    if(principal ==undefined || principal <=0){
        // create alert box
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    else{
        // create print statement for output when compute button is selected
        var intr = "If you deposit <mark>" + principal+",</mark><br>";
        var rt = "at an interest rate of <mark>" + rate+"%.</mark><br>";
        var amt = "You will receive an amount of <mark>"+ interest+",</mark><br>";
        var yer = "in the year <mark'>" + year +"</mark>"; 
       
        document.getElementById("result").innerHTML=intr+rt+amt+yer;
    }
    
}   
    
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}