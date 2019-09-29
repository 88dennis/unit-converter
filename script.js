let toConvertInput = document.querySelector("#toConvertId")
let convertBtns = document.querySelectorAll(".convertBtnClass")
let submitBtn =document.querySelector("#submitBtnId")
let tempInfoContainer = document.querySelectorAll(".tempInfoContainerClass")
let resultSpan = document.querySelector("#resultId")
let allSpan = document.querySelectorAll(".spanClass")
let toConvertInputVal;
let resultVal;

console.log(convertBtns)

console.log(resultSpan)

    for(let i = 0; i < convertBtns.length; i++) {
        convertBtns[i].addEventListener("click", function(){

            for(let j = 0; j < convertBtns.length; j++){
                // convertBtns[j].style.color = "black"
                // convertBtns[j].style.backgroundColor = "transparent"
                convertBtns[j].style.textDecoration = "none"
                // convertBtns[j].style.borderStyle = "solid"
                tempInfoContainer[j].style.display = "none"
            }

            // this.style.outlineStyle = "none"
            resultSpan.style.backgroundColor = "transparent";
            resultSpan.style.borderStyle = "solid";
            resultSpan.style.color = "black";

            allSpan[0].textContent = "=";
            allSpan[1].textContent = "Result";

            // for(let k= 0; k < allSpan.length; k++){
            //      allSpan[k].style.display = "none"
            // }

            allSpan[0].style.display = "inline"
            allSpan[1].style.display = "inline"

            toConvertInput.value = ""
            tempInfoContainer[i].style.display = "flex"
            // this.style.backgroundColor = "steelblue"
            // this.style.borderStyle = "none"
            // this.style.color = "white"
           this.style.textDecoration = "underline"

            if(this.textContent === "deg F to deg C") {
            toConvertInput.setAttribute("placeholder", "Fahrenheit Value")
            toConvertInput.style.display = "block"
            submitBtn.style.display = "block"
            // submitBtn.style.backgroundColor = "lightgrey"
            // submitBtn.style.borderStyle = "none"
                  }

            if(this.textContent === "Ft to Meters") {
                toConvertInput.setAttribute("placeholder", "Feet Value")
                toConvertInput.style.display = "block"
                submitBtn.style.display = "block"
                // submitBtn.style.backgroundColor = "lightgrey"
            // submitBtn.style.borderStyle = "none"
             }
             if(this.textContent === "Miles to Km") {
                toConvertInput.setAttribute("placeholder", "Miles Value")
                toConvertInput.style.display = "block"
                submitBtn.style.display = "block"
                // submitBtn.style.backgroundColor = "lightgrey"
            // submitBtn.style.borderStyle = "none"
                }

                if(this.textContent === "lbs to Kg") {
                    toConvertInput.setAttribute("placeholder", "Pounds Value")
                    toConvertInput.style.display = "block"
                    submitBtn.style.display = "block"
                    // submitBtn.style.backgroundColor = "lightgrey"
            // submitBtn.style.borderStyle = "none"
                }
        })
    }
    
    submitBtn.addEventListener("click", convertFunction);
    toConvertInput.addEventListener("keyup", enterFunction);

    function convertFunction(){

        if(toConvertInput.placeholder === "Fahrenheit Value"){
            toConvertInputVal = Number(toConvertInput.value);
            convertThis(toConvertInputVal, toConvertInput.placeholder);
            console.log(toConvertInputVal);
            // submitBtn.style.outlineStyle = "none"
            // submitBtn.style.color = "black"
            toConvertInput.value = ""
        } else if(toConvertInput.placeholder === "Feet Value"){
            toConvertInputVal = Number(toConvertInput.value);
            convertThis(toConvertInputVal, toConvertInput.placeholder);
            console.log(toConvertInputVal);
            // submitBtn.style.outlineStyle = "none"
            // submitBtn.style.color = "black"
            toConvertInput.value = ""
        }else if(toConvertInput.placeholder === "Miles Value"){
            toConvertInputVal = Number(toConvertInput.value);
            convertThis(toConvertInputVal, toConvertInput.placeholder);
            console.log(toConvertInputVal);
            // submitBtn.style.outlineStyle = "none"
            // submitBtn.style.color = "black"
            toConvertInput.value = ""
        } else  if(toConvertInput.placeholder === "Pounds Value"){
            toConvertInputVal = Number(toConvertInput.value);
            convertThis(toConvertInputVal, toConvertInput.placeholder);
            // submitBtn.style.outlineStyle = "none"
            // submitBtn.style.color = "black"
            console.log(toConvertInputVal);
            toConvertInput.value = ""
        }

    
    }


    
    function enterFunction(event){
        if(event.which === 13) {
            submitBtn.click();
        }
    }

function convertThis(inputVal, id){
    if(isNaN(inputVal)) {
       let message = "Enter a Number"
        resultSpan.textContent = message;
        console.log("Not a number")
    } else {
    if(id === "Fahrenheit Value"){
        resultVal = (inputVal - 32) * 5 / 9;
            resultSpan.textContent = resultVal
            console.log("Not a number")
            console.log(isNaN(resultVal), "RESULT SDASDASDASD")
            resultSpan.textContent = resultVal + " deg C";
            resultSpan.style.backgroundColor = "steelblue";
            resultSpan.style.borderStyle = "none";
            resultSpan.style.color = "white";
            console.log(resultVal, "Temp Result")
    
       } else if(id === "Feet Value"){
        resultVal = ((inputVal) * 1 / 3.281);
        resultSpan.textContent = resultVal + " mtr";
        resultSpan.style.backgroundColor = "steelblue";
        resultSpan.style.borderStyle = "none";
        resultSpan.style.color = "white";
        console.log(resultVal, "length Result")
       } else if(id === "Miles Value"){
        resultVal = ((inputVal) * 1.609344);
        resultSpan.textContent = resultVal + " Km";
        resultSpan.style.backgroundColor = "steelblue";
        resultSpan.style.borderStyle = "none";
        resultSpan.style.color = "white";
        console.log(resultVal, "distance Result")
       } else if(id === "Pounds Value"){
        resultVal = ((inputVal) * 1 / 2.205);
        resultSpan.textContent = resultVal + " Kg";
        resultSpan.style.backgroundColor = "steelblue";
        resultSpan.style.borderStyle = "none";
        resultSpan.style.color = "white";
        console.log(resultVal, "weight Result")
       }
    }
    } 





    // if(isNaN(resultVal)) {
    //     resultVal = "Enter a Number"
    //     resultSpan.textContent = resultVal
    //     console.log("Not a number")
    // } else {
    //     console.log(isNaN(resultVal), "RESULT SDASDASDASD")
    //     resultSpan.textContent = resultVal + " deg C";
    //     resultSpan.style.backgroundColor = "steelblue";
    //     resultSpan.style.borderStyle = "none";
    //     resultSpan.style.color = "white";
    //     console.log(resultVal, "Temp Result")
    // }