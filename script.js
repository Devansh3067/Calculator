let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

let result_String = "";

buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let val = event.target.textContent
        if(val==="AC"){
            result_String = 0;
            input.value = result_String;
        }
        else if(val === "DE"){
            result_String = result_String.substring(0, result_String.length-1);
            input.value = result_String;
        }
        else if(val==="="){
            result_String = eval(result_String);
            input.value = result_String;
        }
        else{
            if(result_String == 0){
                result_String = val;
                input.value = result_String;
            }
            else{
                result_String += val;
                input.value = result_String;
            }
        }
    })
})