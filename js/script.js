let h1 = document.querySelector("h1")
let text = h1.innerHTML

let count = 0

h1.innerHTML= ""
function typejs(){
    h1.innerHTML += text.charAt(count)
    
    count++
    if(count > text.length){
        // clearInterval(stop)
        h1.innerHTML = ""
        count = 0 
    }
    
}

let stop = setInterval(function(){
    typejs()
     
},500)