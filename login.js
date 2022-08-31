
function myFun(){

let usr= document.getElementById("name").value;
let key =document.getElementById("pass").value;

    if (usr == "admin" && key == "123"){
        document.getElementById("contain").innerHTML="<h1> welcome <3 </h1>";
   
    }else{
        document.getElementById("contain").innerHTML="<h1> Not Registered !!!! </h1>";

   
    }

}

document.getElementById("but").onclick = myFun;

