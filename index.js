function openHall(){
    window.location.href = "interior.html"
}

function openKitchen(){
    window.location.href = "kit.html"
}

function openDevghar(){
    window.location.href = "devg.html"
}

function openBedroom(){
    window.location.href = "bed.html"
}

function openTvunit(){
    window.location.href = "tvu.html"
}

//SERCH BAR SECTION//
function searchInterior(){
    let value = document.getElementById("searchInput").value.toLowerCase();

    if(value.includes("kitchen")){
        window.location.href="#kitchen";
    }

    else if(value.includes("bedroom")){
        window.location.href="#bedroom";
    }
    else if(value.includes("hall")){
        window.location.href="#hall";
    }
    else  if(value.includes("tv unit")){
        window.location.href="#tv unit";
    }
    else if(value.includes("dev ghar")){
        window.location.href="#dev ghar";
    }
    
   else{
    alert("not found");
   }
}
document.getElementById("searchInput").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        searchInterior();
    }
});

/*sigh and register */

function toggleAccount(){
    let menu = document.getElementById("accountMenu");

    if(menu.style.display === "block"){
        menu.style.display ="none";
    }
    else{
        menu.style.display="block";

    }
}
function openSignin(){
    window.location.href="signin.html";
}
function openRegister(){
    window.location.href="register.html"
}


//calcultor//

function calculate(){
    let w = 
    parseFloat(document.getElementById("WIDTH").value);
    let b =

    parseFloat(document.getElementById("breath").value);
    let r =

    parseFloat(document.getElementById("RATE").value);
    
    if(!w || !b || !r){
        document.getElementById("result").innerText = "Enter valid value";
        return;
    }
    let budget = w * b * r;
    document.getElementById("result").innerText = "$ " + budget;
}
function calculate_b(){
    let w = 
    parseFloat(document.getElementById("BWIDTH").value);
    let b =

    parseFloat(document.getElementById("Bbreath").value);
    let r =

    parseFloat(document.getElementById("BRATE").value);
    
    if(!w || !b || !r){
        document.getElementById("Bresult").innerText = "Enter valid value";
        return;
    }
    let budget = w * b * r;
    document.getElementById("Bresult").innerText = "$ " + budget;
}
function calculate_h(){
    
    let w = 
    parseFloat(document.getElementById("HWIDTH").value);

    let b =
    parseFloat(document.getElementById("Hbreath").value);

    let r =
    parseFloat(document.getElementById("HRATE").value);
    
    if(!w || !b || !r){
        document.getElementById("Hresult").innerText = "Enter valid value";
        return;
    }
    let budget = w * b * r;
    document.getElementById("Hresult").innerText = "$ " + budget; 
}

