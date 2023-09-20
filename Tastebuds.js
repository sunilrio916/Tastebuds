function taste(){
    var email=document.getElementById("Email").value;

    var pass=document.getElementById("password").value;

    if(email=="admin@gmail.com" && pass=="admin@123"){
        window.location.assign("Tastebuds.html")
        alert("You are sign in sucessfully")
    }
    else{
        alert("invalid email and password")
    }
}

