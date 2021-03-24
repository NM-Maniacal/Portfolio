
var i = 1;

function postFunction(){
    var TextInput = document.getElementById("text1").value;

    if(i==1 )
    {
        var Text01 = document.getElementById("topic1"); 
        Text01.innerHTML =  TextInput;
        i=2;
    }
    // var Text01 = document.getElementById("topic1"); 
    // Text01.innerHTML =  TextInput;
    else if(i==2)
    {
        var Text02 = document.getElementById("comment1"); 
        Text02.innerHTML =  TextInput;
        i=3;
    }
    else if(i==3)
    {
        var Text03 = document.getElementById("comment2"); 
        Text03.innerHTML =  TextInput;
        i=4;
    }
    else if (i==4)
    {
        alert("Full");
    }

}

function clearFunction(){
    var Text01 = document.getElementById("topic1"); 
    Text01.innerHTML = "";

    var Text02 = document.getElementById("comment1"); 
    Text02.innerHTML =  "";

    var Text03 = document.getElementById("comment2"); 
    Text03.innerHTML =  "";
    i=1;
    
}

// function changeImage() { 
//     var pokeballImg = document.getElementById("img01"); 
//     pokeballImg.src = "pic/pikachu.png"; 
// }

// // var link = document.getElementById("tw-link");
// // link.innerHTML = "twitter";

// window.onload = twitterLink;
// function twitterLink(){
//     var link = document.getElementById("tw-link");
//     link.innerHTML = "twitter";
// }


