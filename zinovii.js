function incomeChecker() {
  
    document.getElementById("forbid").style.display = "none";
    document.getElementById("limit").style.display = "none";
    document.getElementById("full").style.display = "none";


    var income = parseFloat(document.getElementById("income").value);

    if (income <= 1000) {
        document.getElementById("forbid").style.display = "block";
        document.getElementById("forbid").style.backgroundColor = "red";
    } else if (income > 1000 && income <= 10000) {
        document.getElementById("limit").style.display = "block";
        document.getElementById("limit").style.backgroundColor = "yellow";
    } else {
        document.getElementById("full").style.display = "block";
        document.getElementById("full").style.backgroundColor = "green";
    }
}
