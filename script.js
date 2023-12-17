const inputBox = document.getElementById("input-box");
const listWrapper = document.getElementById("list-wrapper");


function addTask(){
    if(inputBox.value === ''){
        alert ("Add todo list! Write something in the space provided");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listWrapper.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(span);
    }

    inputBox.value = ""
 
    }


