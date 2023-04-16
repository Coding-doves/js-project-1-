/*this section is for changebg*/
let i = 0;
let j = 0;

/*change bg colour of body*/
function change(){
    let colours = ["yellow", "green", "lightblue", "navy", "lavender", "purple", "white"];
    
    document.getElementsByTagName("body")[0].
    style.backgroundColor = colours[i++];

    if(i > colours.length - 1){i = 0;}
}

/*change div colour of body*/
function d(){
    document.getElementById("dc").style.backgroundColor = "pink";
}
function d1(){
    document.getElementById("dc").style.backgroundColor = "gray"; 
}
function d2(){
    document.getElementById("dc").style.backgroundColor = "brown"; 
}
function d3(){
    document.getElementById("dc").style.backgroundColor = "aqua"; 
}

/*End of section of changebg*/
