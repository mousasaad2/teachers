
var arr = [];
let b = document.getElementById("se");
for(let i = 0; i < b.length; i++){
    arr.push(b[i]);
    
}

function mousa(){
    let a = document.getElementById("input").value;
    let q = document.getElementById("to");
    let c = document.getElementById("text");
    let k = document.getElementById("text1_");
    let b = document.getElementById("se");
    let max = 14;
    let min = 10;
    let y = a * b.value;
   
    
    //(function(){

        c.innerHTML = Math.ceil(y/min);
        k.innerHTML = Math.ceil(y/max);
        q.innerHTML = Math.ceil(y);
  
        //})();

    if(y=== 0){
        c.style.color="red";
        k.style.color="red";
        q.style.color="red";
    }else{
        c.style.color="green";
        k.style.color="green";
        q.style.color="green";
        b.style.border="2px solid green";
    }
}
mousa();

function m2ousa(){
    let a = document.getElementById("input").value;
    let q = document.getElementById("to1");
    let c = document.getElementById("text1");
    let k = document.getElementById("text1_2_");
    let b = document.getElementById("sa");
    let max = 14;
    let min = 10;
    let y = a * b.value;
    c.innerHTML = Math.ceil(y/min);
    k.innerHTML = Math.ceil(y/max);
    q.innerHTML = Math.ceil(y);
    
    if(y=== 0){
        c.style.color="red";
        k.style.color="red";
        q.style.color="red";
    }else{
        c.style.color="green";
        k.style.color="green";
        q.style.color="green";
        b.style.border="2px solid green";
    }
}
m2ousa();

function m3ousa(){
    let a = document.getElementById("input").value;
    let q = document.getElementById("to2");
    let c = document.getElementById("text2");
    let k = document.getElementById("text2_3_");
    let b = document.getElementById("sd");
    let max = 14;
    let min = 10;
    let y = a * b.value;
    c.innerHTML = Math.ceil(y/min);
    k.innerHTML = Math.ceil(y/max);
    q.innerHTML = Math.ceil(y);
    
    if(y=== 0){
        c.style.color="red";
        k.style.color="red";
        q.style.color="red";
    }else{
        c.style.color="green";
        k.style.color="green";
        q.style.color="green";
        b.style.border="2px solid green";
    }
}
m3ousa();

function m4ousa(){
    let a = document.getElementById("input").value;
    let q = document.getElementById("to3");
    let c = document.getElementById("text3");
    let k = document.getElementById("text3_4_");
    let b = document.getElementById("sr");
    let max = 14;
    let min = 10;
    let y = a * b.value;
    c.innerHTML = Math.ceil(y/min);
    k.innerHTML = Math.ceil(y/max);
    q.innerHTML = Math.ceil(y);
    
    if(y=== 0){
        c.style.color="red";
        k.style.color="red";
        q.style.color="red";
    }else{
        c.style.color="green";
        k.style.color="green";
        q.style.color="green";
        b.style.border="2px solid green";
    }
}
m4ousa();

function m5ousa(){
    let a = document.getElementById("input").value;
    let q = document.getElementById("to4");
    let c = document.getElementById("text4");
    let k = document.getElementById("text4_5_");
    let b = document.getElementById("sm");
    let max = 14;
    let min = 10;
    let y = a * b.value;
    c.innerHTML = Math.ceil(y/min);
    k.innerHTML = Math.ceil(y/max);
    q.innerHTML = Math.ceil(y);

    if(y=== 0){
        c.style.color="red";
        k.style.color="red";
        q.style.color="red";
    }else{
        c.style.color="green";
        k.style.color="green";
        q.style.color="green";
        b.style.border="2px solid green";
    }
}
m5ousa();

function opeen(){
    let a = document.getElementById("text").value;
    let b = document.getElementById("text1").value;
    let k = document.getElementById("text2").value;
    let r = document.getElementById("text3").value;
    let m = document.getElementById("text4").value;
    let c = document.getElementById("o2peen");
    let z = Math.trunc(a) + Math.trunc(b) + Math.trunc(k) + Math.trunc(r) + Math.trunc(m);
    c.innerHTML = (z);
    if(z === 0){
        c.style.color="red";
    }else{
        c.style.color="green";
    }

    let a1_ = document.getElementById("text1_").value;
    let b2_ = document.getElementById("text1_2_").value;
    let k3_ = document.getElementById("text2_3_").value;
    let r4_ = document.getElementById("text3_4_").value;
    let m5_ = document.getElementById("text4_5_").value;
    let c6_ = document.getElementById("o3peen");
    let z7_ = Math.trunc(a1_) + Math.trunc(b2_) + Math.trunc(k3_) + Math.trunc(r4_) + Math.trunc(m5_);
    c6_.innerHTML = (z7_);
    if(z7_ === 0){
        c6_.style.color="red";
    }else{
        c6_.style.color="green";
    }

    let to1_ = document.getElementById("to").value;
    let to2_ = document.getElementById("to1").value;
    let to3_ = document.getElementById("to2").value;
    let to4_ = document.getElementById("to3").value;
    let to5_ = document.getElementById("to4").value;
    let to6_ = document.getElementById("o4peen");
    let to7_ = Math.trunc(to1_) + Math.trunc(to2_) + Math.trunc(to3_) + Math.trunc(to4_) + Math.trunc(to5_);
    to6_.innerHTML = (to7_);
    if(to7_ === 0){
        to6_.style.color="red";
    }else{
        to6_.style.color="green";
    }
    
    }
    opeen();