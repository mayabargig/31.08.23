// --1--
function inputColor (inputValue){
    console.log(inputValue);
    }
    
    // --2--
    function addTextToDiv (inputValue){
    document.getElementById("myDiv").innerHTML += `${inputValue}`
    }
    
    // var tempValue;
    // function setTempValue (valueParam){
    //     tempValue = valueParam;
    // }
    
    // --3--
    function getValuesForH1 (){
        // document.getElementById("myH1").innerHTML = document.getElementById("myInput").value; 
        myH1.innerHTML = myInput.value;
    }


// ---1---
function getAlertByOverH1 (){
 alert("wellcome");
}

// ---2---
function getTimeWhenOver (){
    var newDate = new Date();
    console.log(newDate.getHours()+":"+newDate.getMinutes());
}

// ---3---
function changeH3Background (){
    document.getElementById("myH3").style = "background: purple" 
}

//---4---
function changeButtonWidth (){
    myButton.style = "width:200px"
} 

// ---5---
function changeTextValue (){
    firstPhara.innerHTML = "hello mami"
}

// ---6---
function showUserNameByClick (){
    userName.innerHTML = nameInput.value;
}

// ---7---
function 

