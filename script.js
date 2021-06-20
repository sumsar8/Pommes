const downbutton = document.getElementById("down");
function downup(){
    document.getElementById("downboxid").classList.add("downboxanimate");   
    setTimeout(() => {
        document.getElementById("downboxid").innerHTML = "Upp";
    }, 2000);
    setTimeout(() => {
        document.getElementById("downboxid").classList.remove("downboxanimate");
    }, 5000);
}