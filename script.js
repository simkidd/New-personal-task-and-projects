const inputBox = document.getElementById("input-box");
const listWrapper = document.getElementById("list-wrapper");


function addTask (){
  if(inputBox.value === ''){
    alert ( "Add a text!" );
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listWrapper.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML ='<i class="fas fa-trash"></i>';
    li.appendChild(span)

  }

  inputBox.value = "";
  storeData()
}

listWrapper.addEventListener("click", function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    storeData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    storeData()
  } 
}, false);
function storeData(){
  localStorage.setItem("data", listWrapper.innerHTML);
}
function viewTask(){
  listWrapper.innerHTML = localStorage.getItem('data')
}

viewTask()






























// const inputBox = document.getElementById("input-box");
// const listWrapper = document.getElementById("list-wrapper");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("Add todo list! Write something in the space provided");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listWr apper.appendChild(li);

//     let span = document.createElement("span");
//     span.innerHTML = '<i class="fas fa-trash"></i>';
//     li.appendChild(span);

//     span.addEventListener("click", function() {
//       li.remove();
//     });
//   }
//   inputBox.value = "";
//   storeData()
// }

// listWrapper.addEventListener('click', function(e){
//   if(e.target.tagName === 'LI'){
//     e.target.classList.toggle("checked");
//     storeData()
//   }
//   else if (e.target.tagName === "SPAN"){
//     e.target.parentElement.remove();
//     storeData()
//   }
// }, false)

// function storeData(){
// localStorage.setItem("data", listWrapper.innerHTML);
// }

// function DisplayTodoTask(){
//   listWrapper.innerHTML = localStorage.getItem("data")
// }
// DisplayTodoTask(); 




