let count = 0
let overwrite=document.getElementById("count-el")

function increment(){
    count++
    overwrite.innerHTML = count
}
function decrement(){
    if(count==0)
    {

    }
    else 
    { 
        count--
        overwrite.innerHTML = count
        console.log(overwrite)
    }
}
let newvar=document.getElementById("inner")
function display(){
    newvar.textContent+=count+" - "
    overwrite.textContent=0
    count=0
    
}
