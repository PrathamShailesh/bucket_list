var addbtn = document.querySelector(".btn");
var text = document.querySelector(".text");
var box = document.querySelector(".listbox")
var res = document.querySelector(".last")

var arr = [];


function remove(i){
    arr.splice(i,1);

    console.log(arr)
    display()
}

function display() {
    box.innerHTML = ""
    for (let i = 0;i<arr.length;i++) {
        console.log(arr[i])
        box.innerHTML += `<div class="item">${arr[i]}<span class="tick"><img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" onclick="remove(${i})"></span></div>`
    }
}


function addtoarray() {
    arr.push(text.value)
    display()
}


addbtn.onclick = function name() {
    console.log(text.value);
    addtoarray()
    
}


res.onclick=function reset(){
    arr=[]
    display()
}




