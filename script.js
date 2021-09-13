var n = 0

document.getElementById("increment").addEventListener("click",()=>{
    n++
    document.getElementById("number").innerText = n
})
document.getElementById("decrement").addEventListener("click",()=>{
    if(n>0){
    n--    
    document.getElementById("number").innerText = n
    }else{
        alert("NOT ALLOWED")
    }
})

document.getElementById("reset").addEventListener("click",()=>{
    n = 0 
    document.getElementById("number").innerText=0 
})
