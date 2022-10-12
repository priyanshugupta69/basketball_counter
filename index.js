var a = document.getElementById("homescore")
var b = document.getElementById("guestscore")
var homecount = 0
var guestcount = 0
function incrementhome1(){
    homecount = homecount+1
 
    a.innerhtml = homecount
    
         
}
function incrementhome2(){
    homecount = homecount + 2
    
    a.innerhtml = homecount
    
         
}
function incrementhome3(){
    homecount = homecount + 3
   
    a.innerhtml = homecount
    
         
}
function incrementguest1(){
    guestcount = guestcount +1

    b.innerhtml = guestcount;
    
         
}
function incrementguest2(){
    guestcount = guestcount +2
    b.innerhtml = guestcount
    
         
}
function incrementguest3(){
    guestcount = guestcount + 3
  
    b.innerhtml = guestcount
    
         
}