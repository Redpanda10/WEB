//let x=document.getElementById("count").innerHTML

let count= 0

let countEL=document.getElementById("count-el")

function increment(){
    count++
    countEL.innerHTML=count
}
function decrement(){
    if(count==0){

    }
    else{
    count--
    countEL.innerHTML=count
        }
    
}
